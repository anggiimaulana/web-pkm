import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react';
import { perkalian } from '../../data';

const Kali = () => {
    const [buttonText, setButtonText] = useState('Tampilkan Layar Penuh');
  const iframeRefs = useRef([]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleFullscreenChange = () => {
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    setButtonText(isFullscreen ? 'Keluar dari Layar Penuh' : 'Tampilkan Layar Penuh');
  };

  const toggleFullscreen = (index) => {
    const iframe = iframeRefs.current[index];
    if (!iframe) return;

    if (!document.fullscreenElement) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  return (
    <div className='perkalian-page'>
        <div className="perkalian ">
            <Container>
                <Row>
                {perkalian.map((jumlah, index) => (
                    <Col key={jumlah.id}>
                        <div className="video-container bg-white">  
                                    
                        <Card style={{ width: '20rem'}}>
                            <iframe 

                            src={jumlah.URL} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen={true}
                            ref={ref => iframeRefs.current[index] = ref} // Assign each iframe ref to the corresponding index
                            ></iframe>
                            <Card.Body>
                            <Card.Title>{jumlah.title}</Card.Title>
                            <Button className='tombol' onClick={() => toggleFullscreen(index)}>
                                {buttonText}
                            </Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Kali
