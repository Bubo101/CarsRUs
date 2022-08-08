function MainPage() {
  return (
    <body style={{ 
      backgroundImage: `url(https://newevolutiondesigns.com/images/freebies/4k-car-wallpaper-1.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '700px',
      borderRadius: "10px",
    }}>
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Cars R Us</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>
    </body>
  );
}

export default MainPage;
