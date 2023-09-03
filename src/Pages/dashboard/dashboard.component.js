import SalesToday from "./salesToday/salesToday.component"
import Revenue from "./revenue/revenue.component"
import TopProduct from "./topProduct/topProduct.component"

import {
    DivDashboard,
} from "./dashboard.styles"

const Dashboard = () => {

    return (
        <DivDashboard>
            <SalesToday />
            <Revenue />
            <TopProduct />
        </DivDashboard>
    )
}

export default Dashboard