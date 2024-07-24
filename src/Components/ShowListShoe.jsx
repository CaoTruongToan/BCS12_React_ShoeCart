import ItemShoe from "./ItemShoes";

const ShowListShoe = ({ productsData, setStateModal }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productsData.map((product, index) => (
                <ItemShoe
                    key={index}
                    item={product}
                    setStateModal={setStateModal}
                />
            ))}
        </div>
    );
};

export default ShowListShoe;
