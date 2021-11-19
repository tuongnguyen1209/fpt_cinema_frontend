const Uploadfile = async (selectedFile) => {
  let formData = new FormData();
  formData.append("file", selectedFile);
  formData.append("upload_preset", "s8o1mqxr");
  formData.append("cloud_name", "myapp12091999");
  let a = await fetch(
    "https://api.cloudinary.com/v1_1/myapp12091999/image/upload",
    {
      method: "post",
      body: formData,
    }
  );
  return await a.json();
};

export default Uploadfile;
