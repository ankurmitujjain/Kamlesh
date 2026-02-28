import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const Venous = () => {
    const content = (
        <>
            <p>Varicose veins are enlarged, twisted veins that most commonly affect the legs, causing pain, swelling, and severe cosmetic concerns. While traditional vein stripping surgeries are painful and require long recovery periods, Dr. Kamlesh Talesra offers modern alternatives like Endovenous Laser Therapy (EVLT) and the VenaSeal closure system.</p>
            <p>These advanced treatments close off the faulty veins from the inside through a tiny needle puncture. With VenaSeal, a safe medical adhesive is used to seal the vein shut permanently. The body naturally reroutes the blood to healthier veins, immediately resolving the symptoms with virtually zero downtime.</p>
        </>
    );

    const faqs = [
        {
            q: "What is VenaSeal?",
            a: "VenaSeal is a revolutionary treatment that uses a specially formulated medical adhesive to close varicose veins without the need for heat, lasers, or multiple painful numbing injections."
        },
        {
            q: "How soon can I walk after the procedure?",
            a: "Immediately! Patients are encouraged to walk right after the procedure. You can return to your normal daily routine the very same day."
        },
        {
            q: "Do I need to wear compression stockings?",
            a: "Unlike older laser treatments, VenaSeal often eliminates the need for uncomfortable compression stockings post-procedure."
        }
    ];

    return (
        <ServiceTemplate
            title="Venous Disorders (Varicose Veins)"
            summary="Laser therapy and advanced VenaSeal systems for quick, painless recovery from varicose veins and venous insufficiency."
            imagePath="images/services/venous.jpg"
            content={content}
            faqs={faqs}
        />
    );
};

export default Venous;
