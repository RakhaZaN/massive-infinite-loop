// function Footer() {
//     return (
//       <div>
//         <section className="h-c58 bg-customBlue3 flex items-center justify-between p-8">
//           <div className="flex items-center">
//             <h1 className="text-center text-white mr-4">© 2023 Infinite Loop - infinitelearning</h1>
//           </div>
//           <div className="flex items-center">
//             <img src={`/img/twitter-32.png`} alt="Twitter" className="w-6 h-6 mr-4" />
//             <img src={`/img/instagram-64.png`} alt="Instagram" className="w-6 h-6 mr-4" />
//             <img src={`/img/facebook-32.png`} alt="Facebook" className="w-6 h-6" />
//           </div>
//         </section>
//       </div>
//     )
//   }
  
//   export default Footer;

function Footer() {
  return (
    <div>
      <section className="h-c58 bg-customBlue3 flex items-center justify-between p-8">
        <div className="flex items-center">
          <h1 className="text-center text-white mr-4">© 2023 Infinite Loop - infinitelearning</h1>
        </div>
        <div className="flex items-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={`/img/twitter-32.png`} alt="Twitter" className="w-6 h-6 mr-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={`/img/instagram-32.png`} alt="Instagram" className="w-6 h-6 mr-4" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={`/img/facebook-32.png`} alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Footer;

  