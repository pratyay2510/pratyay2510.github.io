# frozen_string_literal: true

# Loads per-destination photo captions that live alongside the photos.
#
# Jekyll only reads data files out of _data/, so a captions.yml sitting in
# assets/img/travel/<place>/ is invisible to Liquid by default. This generator
# picks each one up at build time and exposes them as:
#
#   site.data.travel_captions["<place>"]["photo-01"]  #=> "Writers' Building"
#
# where <place> is the folder path under assets/img/travel/ — "kolkata",
# "usa/san-diego", and so on. The point is that a caption lives next to the
# photo it describes, so adding photos and captioning them is one trip to one
# folder.
#
# A missing, empty, or malformed captions.yml is never fatal: the build warns
# and the affected photos simply render without captions.
module TravelCaptions
  class Generator < Jekyll::Generator
    safe true
    priority :high

    TRAVEL_ROOT = File.join("assets", "img", "travel")

    def generate(site)
      root = File.join(site.source, TRAVEL_ROOT)
      captions = {}

      Dir.glob(File.join(root, "**", "captions.yml")).sort.each do |file|
        place = File.dirname(file).sub(%r{\A#{Regexp.escape(root)}/?}, "")
        next if place.empty?

        captions[place] = load_captions(file)
      end

      site.data["travel_captions"] = captions
    end

    private

    def load_captions(file)
      loaded = YAML.safe_load(File.read(file), permitted_classes: [], aliases: false)
      return loaded if loaded.is_a?(Hash)

      # An empty file parses to nil / false — that is a normal "no captions yet"
      # state, not something to complain about.
      Jekyll.logger.warn("TravelCaptions:", "#{file} is not a mapping; ignoring") unless loaded.nil? || loaded == false
      {}
    rescue StandardError => e
      Jekyll.logger.warn("TravelCaptions:", "could not read #{file}: #{e.message}")
      {}
    end
  end
end
