import vtracer

def trace(input_path, output_path):
    print(f"Tracing {input_path} to {output_path}...")
    vtracer.convert_image_to_svg_py(
        input_path,
        output_path,
        colormode="color",        # Keep original colors
        hierarchical="stacked",   # Stack shapes for better composition
        mode="spline",            # Use smooth splines
        filter_speckle=4,         # Filter out small noise
        color_precision=6,        # Group colors effectively
        layer_difference=16,
        corner_threshold=60,      # Better corners for text
        length_threshold=4.0,     # Smooth small segments
        max_iterations=10,
        splice_threshold=45,
        path_precision=8
    )

trace("public/assets/clip-n-copy-final.png", "public/assets/clip-n-copy-final.svg")
trace("public/assets/minora-final.png", "public/assets/minora-final.svg")
print("Done!")
