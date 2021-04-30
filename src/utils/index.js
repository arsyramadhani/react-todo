export const getDay = () => {
    const today = new Date().getHours();
    if (today >= 0 && today <= 12) {
        return 'Morning';
    }
    if (today >= 12 && today <= 18) {
        return 'Afternoon';
    }
    return 'Evening';
    // return today;
};
