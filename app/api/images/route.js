useEffect(() => {
  const fetchImages = async () => {
    try {
      const response = await fetch('/api/images');
      if (!response.ok) {
        throw new Error(`Errore API: ${response.status}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('La risposta non è un array');
      }

      // Ordina le immagini considerando i numeri nei nomi dei file
      const sortedData = data.sort((a, b) => {
        const nameA = a.alt.match(/\d+/g)?.map(Number) || [0]; // Estrai numeri da 'alt'
        const nameB = b.alt.match(/\d+/g)?.map(Number) || [0];
        return nameA[0] - nameB[0];
      });

      // Imposta lo stato delle immagini
      setImages(sortedData);

      // Stampa sul frontend l'array delle immagini ordinate
      console.log('Immagini caricate e ordinate:', sortedData);
    } catch (error) {
      console.error('Errore durante il fetch delle immagini:', error);
    }
  };
  fetchImages();
}, []);