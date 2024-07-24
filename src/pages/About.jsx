import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className='about-page'>
      <div className='about min-vh-100'>
        <Container>
          <Row>
            <Col>
            <h3 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-0.5s">Tentang Kami</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className='fw-bold animate__animated animate__fadeInUp animate__delay-0.7s'>Latar Belakang</h4>
              <blockquote>
                <p className='fs-6 animate__animated animate__fadeInUp animate__delay-0.8s'>
                  Latar belakang dari inisiatif "MUDA VISIONER PENDIDIKAN" adalah refleksi dari realitas yang mengkhawatirkan di banyak komunitas, terutama di daerah Jatibarang, 
                  di mana masih tingginya angka anak putus sekolah menjadi salah satu pemicu utama kemiskinan yang berkelanjutan. Fenomena ini menjadi siklus yang sulit diputus, karena jika pendidikan dasar diabaikan oleh orang tua atau masyarakat, 
                  anak-anak cenderung terjerumus ke dalam lingkaran kemiskinan yang sulit untuk mereka keluar. Mereka terpaksa mencari nafkah tanpa mendapatkan pendidikan yang memadai, memperburuk kemungkinan kesempatan mereka untuk berkembang dan sukses di masa depan.
                 </p>
                <p className='fs-6 animate__animated animate__fadeInUp animate__delay-0.85s'>
                  Pentingnya pendidikan sebagai fondasi utama bagi perkembangan individu dan masyarakat menjadi fokus utama dari program "MUDA VISIONER PENDIDIKAN". Para mahasiswa yang terlibat dalam inisiatif ini menyadari bahwa pendidikan bukan hanya tanggung jawab pemerintah atau sekolah, 
                  tetapi juga tanggung jawab bersama seluruh komunitas, termasuk orang tua dan warga sekitar. Mereka memahami bahwa melindungi masa depan anak-anak adalah investasi jangka panjang yang krusial bagi kemajuan masyarakat secara keseluruhan.
                </p>
                <p className='fs-6 animate__animated animate__fadeInUp animate__delay-0.9s'>
                  Dalam menghadapi realitas tersebut, "MUDA VISIONER PENDIDIKAN" mengusung konsep Smart City melalui pendekatan pendidikan teknologi sebagai alternatif untuk anak-anak putus sekolah. Dengan memanfaatkan potensi teknologi, 
                  program ini bertujuan untuk memberikan akses pendidikan yang lebih inklusif dan fleksibel bagi mereka yang terpinggirkan dari sistem pendidikan formal. Melalui upaya ini, diharapkan masyarakat Jatibarang dapat bergerak menuju era Society 5.0, di mana teknologi tidak hanya menjadi alat untuk kemajuan ekonomi, 
                  tetapi juga untuk inklusi sosial dan peningkatan kualitas hidup bagi semua individu, tanpa terkecuali.
                </p>
                <br />
              </blockquote>
              <h4 className='fw-bold animate__animated animate__fadeInUp animate__delay-0.9s'>Tujuan Program</h4>
              <blockquote>
                <p className='fs-6 animate__animated animate__fadeInUp animate__delay-0.9s'>
                  Dalam menyelenggarakan program "MUDA VISIONER PENDIDIKAN", kami memiliki dua tujuan utama yang saling terkait dengan latar belakang masalah yang dihadapi oleh komunitas di seluruh Indonesia. Diantaranya yaitu:
                 </p>
                 <ul className='fs-6 animate__animated animate__fadeInUp animate__delay-1s'>
                  <li>
                    Pertama, kami bertujuan untuk memberikan alternatif pendidikan kepada anak jalanan atau anak putus sekolah di berbagai wilayah, sehingga mereka dapat merasakan pengalaman belajar yang layak seperti anak-anak lainnya di negara ini. Ini tidak hanya tentang memberikan akses ke kelas dan buku pelajaran, 
                    tetapi juga tentang menciptakan lingkungan belajar yang aman, inklusif, dan memberikan dorongan positif bagi perkembangan pribadi mereka. Dengan cara ini, kami berharap dapat mengubah pandangan mereka terhadap pendidikan dan membantu mereka mengembangkan minat serta motivasi untuk belajar.
                  </li>
                  <li>
                    Kedua, kami juga bertujuan untuk mengembangkan soft skill mereka dan memberikan pemahaman tentang teknologi di era Society 5.0 yang berlaku di seluruh dunia. Kami percaya bahwa pendidikan tidak hanya tentang pengetahuan akademis, tetapi juga tentang pengembangan keterampilan dan kemampuan yang diperlukan untuk berhasil dalam kehidupan. 
                    Melalui program ini, kami akan memberikan pelatihan dan kegiatan yang dirancang khusus untuk mengasah keterampilan seperti komunikasi, kerja sama tim, pemecahan masalah, dan kreativitas kepada anak-anak di berbagai daerah di Indonesia. Selain itu, kami juga akan memperkenalkan mereka pada konsep dan aplikasi teknologi yang relevan dengan perkembangan masyarakat saat ini, 
                    sehingga mereka dapat lebih siap menghadapi tantangan dan peluang di masa depan. Dengan demikian, kami berharap dapat memberikan pondasi yang kokoh bagi anak-anak di seluruh Indonesia untuk meraih kesuksesan dan berkontribusi secara positif bagi masyarakat mereka.
                  </li>
                 </ul>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About;
