export default function Home({ navOrder }) {
    return(
        <div className="home-page"> 
            <h1>TEKNOLOJiK YEMEKLER</h1>
            <p>KOD ACIKTIRIR<br />PİZZA DOYURUR</p>
            <button onClick={navOrder}> I'M HUNGRY ! </button>
        </div>
    );
}