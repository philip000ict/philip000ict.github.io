# Import necessary libraries for image manipulation
from PIL import Image, ImageDraw

# Load the base image of the fish
base_image_path = '/mnt/data/DALL·E 2025-01-07 09.08.54 - A highly detailed, 3D close-up depiction of a deep-sea barrel-eye fish in 3_2 landscape mode. The fish features ghastly grey blind eye sockets and lum.webp'
barrel_eye_organ_path = '/mnt/data/A_surreal_depiction_of_a_Macropinna_microstoma,_fo.png'

# Open the images
base_image = Image.open(base_image_path)
barrel_eye_organ = Image.open(barrel_eye_organ_path)

# Resize the barrel eye organ to fit onto the fish head
def resize_barrel_eye(base, organ, scale_factor=0.3):
    organ_width, organ_height = organ.size
    new_size = (int(organ_width * scale_factor), int(organ_height * scale_factor))
    return organ.resize(new_size, Image.ANTIALIAS)

barrel_eye_resized = resize_barrel_eye(base_image, barrel_eye_organ, scale_factor=0.25)

# Place the barrel eye organ on top of the fish head
fish_width, fish_height = base_image.size
organ_width, organ_height = barrel_eye_resized.size

# Calculate coordinates for placement
def calculate_position(base_width, base_height, organ_width, organ_height, offset_x=0, offset_y=-50):
    center_x = base_width // 2 - organ_width // 2 + offset_x
    center_y = base_height // 4 - organ_height // 2 + offset_y
    return (center_x, center_y)

organ_position = calculate_position(fish_width, fish_height, organ_width, organ_height)

# Overlay the barrel eye organ onto the base fish image
base_image.paste(barrel_eye_resized, organ_position, barrel_eye_resized)

# Save the final combined image
output_path = '/mnt/data/fish_with_barrel_eye.png'
base_image.save(output_path)

output_path
