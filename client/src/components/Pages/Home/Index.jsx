import Categories from "../../categories/Categories";
import Products from "../../products/Products";
import CardTotals from "../../cardTotals/CardTotals";
import Header from "../../header/Header";


function Index() {
    return (
        <>
            <Header />

            <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
                <div className="categories overflow-auto max-h-[calc(100vh-113px)] md:pb-10">
                    <Categories />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
                    <Products />
                </div>
                <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
                    <CardTotals />
                </div>
            </div>
        </>
    );
}

export default Index;
