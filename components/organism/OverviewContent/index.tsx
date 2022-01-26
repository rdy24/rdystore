import Categori from "./Categori";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                <Categori nominal={18000500} icon="ic-desktop">
                  {" "}
                  Game <br /> Desktop
                </Categori>
                <Categori nominal={8445500} icon="ic-mobile">
                  {" "}
                  Game <br /> Mobile
                </Categori>
                <Categori nominal={18000500} icon="ic-desktop">
                  {" "}
                  Others <br /> Categories
                </Categori>
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    title="Mobile Legends"
                    image="overview-1"
                    categori="Desktop"
                    item="200 Gold"
                    price={10000000}
                    status="pending"
                  />
                  <TableRow
                    title="Mobile Legends"
                    image="overview-2"
                    categori="Desktop"
                    item="200 Gold"
                    price={10000000}
                    status="success"
                  />
                  <TableRow
                    title="Mobile Legends"
                    image="overview-3"
                    categori="Desktop"
                    item="200 Gold"
                    price={10000000}
                    status="failed"
                  />
                  <TableRow
                    title="Mobile Legends"
                    image="overview-4"
                    categori="Desktop"
                    item="200 Gold"
                    price={10000000}
                    status="pending"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
