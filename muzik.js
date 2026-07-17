<script>
    try {
        const songs = Array.from({length: 20}, (_, i) => `sarki${i + 1}.mp3`);
        const container = document.getElementById("song-list");
        
        songs.forEach(song => {
            let div = document.createElement("div");
            div.className = "song-item";
            div.innerHTML = `<span>${song}</span>`;
            div.onclick = () => { 
                console.log("Seçildi: " + song); // Tıklandığında konsola yazar
                document.getElementById("playing-text").innerText = "Çalıyor: " + song; 
            };
            container.appendChild(div);
        });
        console.log("Liste başarıyla yüklendi.");
    } catch(e) {
        alert("Hata oluştu: " + e.message);
    }
</script>