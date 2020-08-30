import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'


function Service() {
    return (
       <Layout>
             <SEO title="Customer Service and Purchase Conditions" />
             <div className="content-wrap">
    <div className="container">
        <div className="label-block-default">
            <h4 className="text-uppercase">Contact Us</h4>
        </div>
        <h6>You can send us an email</h6>
        <h6>email: info@dediabetes.com</h6>
        <h6>You can complete this form:</h6>
        {/* Form Here */}
        <div className="label-block-default">
            <h4 className="text-uppercase">Acceptance and acceptance test</h4>
        </div>
        <p>
            The acquisition of the products must be done through the activation of the "Add to Cart" and "Reserve"
            buttons that appear on the product files displayed in the resources sections, and express the total
            acceptance of each and every one of the Contract Conditions as shown on the DeDiabetes website prior to the
            acquisition of the products.
        </p>
        <p>As a condition for placing any order, the user must provide their data in the form corresponding to orders
            and store registration. The registration information you provide must be accurate, complete, and current at
            all times. Failure to do so constitutes a violation of the terms, which may result in the dissolution of the
            agreement with DeDiabetes.</p>
        <p>From the moment of acceptance, the user acquires the status of DeDiabetes Customer.</p>
        <div className="label-block-default">
            <h4 className="text-uppercase">Characteristics of the services offered</h4>
        </div>
        <p>In all products and services it will be indicated if the stock is available at the moment if necessary. Our
            intention is to always keep the stock updated, but it may not be possible.
        </p>
        <p>If this occurs, we will contact you to facilitate the immediate return of the payment, or inform you of the
            new delivery period. Without entailing any type of damage or compensation, not having available stock of the
            product or service offered for DeDiabetes.
        </p>
        <p>The customer always has the possibility of making a prior purchase inquiry about the stock before placing the
            order using the email info@dediabetes.com.
        </p>
        <p>Offers will be marked as such, and will be valid as long as they appear on your screen. Said offers may be
            modified or canceled without prior notice. DeDiabetes is not obliged to indemnify the user or third parties
            for the consequences of the use of its products and services, whether direct or indirect damages.</p>
        <div className="label-block-default">
            <h4 className="text-uppercase">Purchase validation</h4>
        </div>
        <p>The validation of the order by the client expressly implies knowledge and acceptance of these general
            contracting conditions as part of the conclusion of the contract. Unless proven otherwise, the data recorded
            by DeDiabetes constitutes proof of the set of transactions carried out between DeDiabetes and its customers.
        </p>
        <div className="label-block-default">
            <h4 className="text-uppercase">Conditions and Forms of Payment</h4>
        </div>
        <p>The user / buyer agrees to pay for the products and services purchased from DeDiabetes in the accepted forms
            of payment and for any additional amount (including taxes and late fees, as the case may be).</p>
        <div className="label-block-default">
            <h4 className="text-uppercase">Pricing Policy</h4>
        </div>
        <p>The prices applicable to each product and / or service are those indicated on the website on the date of the
            order.</p>
        <div className="label-block-default">
            <h4 className="text-uppercase">Validity of prices and offers</h4>
        </div>
        <p>The products and services offered on the website, and their prices, will be available for purchase while they
            are in the catalog of products displayed through the website. Users are kindly requested to access updated
            versions of the website to avoid pricing errors. In any case, the orders in process will maintain their
            conditions for 7 days from the moment they are formalized.</p>

        <div className="label-block-default">
            <h4 className="text-uppercase">Claims, Returns, Withdrawal</h4>
        </div>
        <p>All purchases are final. The amount paid by the client will only be refunded in the event that a product has
            not been sent or a service is not provided.</p>
        <p>In the event that a service is not provided, DeDiabetes will proceed to refund the amount paid by the client.
            Likewise, the amount of the service will be refunded if the client desists from performing the service
            within a period of 14 days from their registration, and 5 days before the start date of the activity,</p>
        <p>The user / buyer may make claims or requests for withdrawal or return by sending an email to
            info@dediabetes.com indicating their name and surname, the order number, the service or product purchased
            and stating the reasons for their claim.

        </p>
        <p>The refund of the amount of the service will be made by reimbursement from the same means by which the
            payment was made.
        </p>
        <div className="label-block-default">
            <h4 className="text-uppercase">Affiliate Products</h4>
        </div>
        <p>Articles on DeDiabetes may contain affiliate links, where DeDiabetes receives a small compensation if the
            user decides to make a purchase based on our recommendation.</p>
        <p>Our judgment is in no way biased, and our recommendations are always based on the merits of the topics being
            discussed. For more details, read our
            <Link to="/aviso-legal-politica-privacidad">Privacy Policy </Link> .</p>
    </div>
</div>
       </Layout>
    )
}

export default Service
