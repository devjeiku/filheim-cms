import CollectionCabinets from '../../components/collections/CollectionCabinets';
import CollectionHero from '../../components/collections/CollectionHero';
import Navbar from '../../components/Navbar';
import { getBackgroundImages, fetchProjects } from '../../constants/data';
import CollectionCountertops from '../../components/collections/CollectionCountertops';

async function CollectionPage() {
    // Fetch all data in parallel
    const [images, projects] = await Promise.all([
        getBackgroundImages(),
        fetchProjects(),
    ]);

    // const cabinetProjects = projects.filter(
    //     (project) => !project.name.toLowerCase().includes('countertop')
    // );

    // const countertopProjects = projects.filter((project) =>
    //     project.name.toLowerCase().includes('countertop')
    // );

    const bgImage = images && images.length > 0 ? images[0].image : '';
    return (
        <div>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '50vh',
                }}
            >
                <div className='absolute top-0 left-0 w-full z-50 text-white'>
                    <Navbar />
                </div>

                <CollectionHero />
            </div>

            <CollectionCabinets projects={projects} />
            <CollectionCountertops projects={projects} />
            <div className='bg-white py-32'></div>
        </div>
    );
}

export default CollectionPage;
