import NavBar from "./NavBar";
import React from 'react';
import SectionList from "./data/doltestsection";
import SectionCard from "./SectionCard";

export function Home () {
    const items = SectionList;
    return(
        <div id="BodyHome">
            <div>
                <NavBar />
            </div>
            
            <div className="section-card">
                {
                    items.map((e) => {
                        return (<SectionCard id={e.id} name={e.name} description={e.description} image={e.image} />)
                    })
                }
            </div>
        </div>

    );
};

export default Home;