let make_album= (Artist:String, Album:String, Num?:number)=>{
    const makeAlbum={
        "Artist": `${Artist}`,
        "Album" : `${Album}`,
        "Number of Tracks": `${Num}`,
    }
   if (typeof Num !== `undefined`){console.log("Artist =", makeAlbum.Artist ,"\nAlbum =", makeAlbum.Album,"\nNumber of tracks =", makeAlbum["Number of Tracks"])} 
   else {console.log("Artist =", makeAlbum.Artist ,"\nAlbum =", makeAlbum.Album)}
}
make_album("Junaid Jamshaid","Muhammad (SAWW) ka Roza")
make_album("Nusrat Fateh Ali", "Allah ho")
make_album("Qari Waheed Zafar","Fasaloon ko takalluf hy")
make_album("Shaikh Sudais","Quran", 30)