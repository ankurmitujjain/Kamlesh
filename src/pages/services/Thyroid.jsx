import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const Thyroid = () => {
    const content = (
        <>
            <p>Thyroid nodules and parathyroid adenomas are common conditions that historically required open surgery involving significant scarring and recovery time. Today, minimally invasive techniques like Microwave Ablation (MWA) and Radiofrequency Ablation (RFA) provide a cutting-edge alternative.</p>
            <p>Under precise ultrasound guidance, Dr. Kamlesh Talesra inserts a fine needle into the nodule. Thermal energy is then applied to destroy the targeted abnormal cells while safely preserving the surrounding healthy glandular tissue. This outpatient procedure takes less than an hour, leaves no visible scar, and significantly reduces the risk of complications.</p>
        </>
    );

    const faqs = [
        {
            q: "Is the procedure painful?",
            a: "The ablation is performed under local anesthesia. Patients typically experience only mild discomfort or a feeling of pressure, but no sharp pain."
        },
        {
            q: "Will I have a scar on my neck?",
            a: "No. The procedure uses a needle thin enough that it does not require incisions or stitches, leaving virtually no scar."
        },
        {
            q: "How fast is the recovery?",
            a: "Most patients can return to their normal daily activities the very next day. You will be monitored for a short period post-procedure and then discharged."
        }
    ];

    return (
        <ServiceTemplate
            title="Thyroid & Parathyroid Interventions"
            summary="Targeted microwave and radiofrequency ablation for nodules and adenomas, preserving healthy tissue without traditional surgery."
            imagePath="images/services/thyroid.jpg"
            content={content}
            faqs={faqs}
        />
    );
};

export default Thyroid;
