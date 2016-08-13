var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  Push.create("Hola Gente de Código Facilito", {
    body: "Tutoriales en menos de 15 min",
    icon: "https://pbs.twimg.com/profile_images/1550374393/coco_thumb.jpg",
    timeout: 4000,
    onClick: function() {
      window.location = "https://codigofacilito.com"
      this.close();
    }
  });
});
