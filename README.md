This extension is no longer relevant, as Facebook no longer encodes your friends' email addresses in images, but it may still be of academic interest. Here is how it used to work:

On any Facebook page containing an e-mail address image, the extension converts the image to text using the following workflow:

1. Copy the image to a canvas using drawImage()
1. Scans through the canvas to find matches for a pre-determined set of character sprites using getImageData
1. Replaces the image with a clickable text e-mail address

Since the font that Facebook uses is not monospaced, and certain letters bleed into each other when adjacent (such as “89″ and “ef”), it wasn’t possible to just store the pixel values for each full letter. What I ended up doing was only matching against only the center of the letters (which are never affected by adjacent letters) and just ignoring character edges.

I’m not claiming that this is the most efficient implementation, but it is definitely complete. In my testing so far, it has correctly identified 100% of the e-mail addresses displayed in the images.