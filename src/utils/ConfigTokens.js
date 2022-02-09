const Configtokens = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
});
export default Configtokens;
