import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import InputBox from "../components/home/InputBox";

function Home() {

    const [studyData, setStudyData] = useState(null);

    return (
        <>
            <Navbar />

            <Hero />

            <InputBox
                setStudyData={setStudyData}
            />

            {studyData && (

                <div>

                    <h2>Study Kit Generated</h2>

                    <pre>
                        {JSON.stringify(studyData, null, 2)}
                    </pre>

                </div>

            )}

        </>
    );

}

export default Home;