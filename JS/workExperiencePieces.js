let experience = '';

workExperienceData.forEach((experince) => {
    experience += `
        <div class="cv-section">
            <div class="cv-section-title-role-date">
                <div class="cv-section-title-role">
                    <h3>${experince.companyName}</h3>
                    <p>${experince.jobTitle}</p>
                </div>
                <p class="cv-section-date">${experince.date}</p>
            </div>
            <div class="cv-section-text">
                <p>
                    ${experince.jobDescription}
                </p>
            </div>
        </div>
    `
});

document.querySelector(".work-experience").innerHTML = experience;