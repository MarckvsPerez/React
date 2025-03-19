const getImage = async () => {
  try {
    const api_key = "OrxMalIkVElcjjC7ktZ98LJ6kEw13dsj";

    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await response.json();

    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
