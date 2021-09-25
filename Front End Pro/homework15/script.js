const ulAlbumsList = document.querySelector('.js-albumslist');
const albumsPhoto = document.querySelector('.col-img');

  function getAlbumsList(album,id) { 
    
    const liAlbumList = document.createElement('li');
    liAlbumList.className = `li-album-list`;
    liAlbumList.dataset.id = id;
    liAlbumList.textContent = album;
    ulAlbumsList.append(liAlbumList);
  }  
  fetch('https://jsonplaceholder.typicode.com/albums')
    
    .then((response) => response.json())
    .then((albums) => {        
        albums.map((album,id) => {
        getAlbumsList(album.title,id);	        
    });
    })

  function getPhotosAlbums(photoList) {   
    
    const imgPhoto = document.createElement('img');  
      imgPhoto.src = photoList.url;
      imgPhoto.width = 600;
      imgPhoto.height = 60;
      albumsPhoto.append(imgPhoto);
  }  
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')    
  .then((response) => response.json())
    .then((albums) => {      
      albums.map((photoList) => {
        getPhotosAlbums(photoList);
    });
  })

  
   function getPhotoAlbumId(albumId) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then((response) => response.json())
    .then((albumsPhotosId) => {         
      albumsPhoto.innerHTML = '';     
      albumsPhotosId.map((img) => {        
        getPhotosAlbums(img);        
      });
    })
  }

  function addEventListener() {   
    
    ulAlbumsList.addEventListener('click', (event) => {      
      const liAlbumList = event.target.closest('li');
      const liAlbumId = liAlbumList.dataset.id;
      getPhotoAlbumId(liAlbumId);
      
    })
  }	
  addEventListener();
