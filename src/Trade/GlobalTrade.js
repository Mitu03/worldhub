import TradeRote from "./Image/TradeRoute.jpg";
function GlobalTrade() {
  return (
    <div class="Trade--global">
      <div className="Trade--global--1">
        <h1 className="Trade--global--1-heading">Introduction to Global Trade</h1>
        <p>
          Global trade, also known as international trade, involves the exchange
          of goods, services, and capital across national borders. It has been a
          critical driver of economic growth, cultural exchange, and
          technological advancement for centuries.
        </p>
        <p>
          In the past, trade routes such as the Silk Road connected different
          regions, facilitating the exchange of not just goods but also
          knowledge, culture, and innovation. Today, modern trade relies on
          sophisticated logistics networks and digital platforms, transforming
          the way countries and businesses interact.
        </p>
        <ul className="Trade--global--1-ul">
          <li>
            <strong>Historical Background:</strong> Trade has evolved from
            bartering systems to highly complex global supply chains.
          </li>
          <li>
            <strong>Key Trade Agreements:</strong> NAFTA, the European Union
            Single Market, and RCEP (Regional Comprehensive Economic
            Partnership) shape global trade policies.
          </li>
        </ul>
      </div>

      <div className="Trade--global--2">
        <img src={TradeRote} alt="worldroute"  height='200px' width='200px'/>
      </div>
    </div>
  );
}

export default GlobalTrade;
