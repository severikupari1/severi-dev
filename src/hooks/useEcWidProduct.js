import { useScript } from "./useScript";
import { useEffect } from "react";
import { waitForElm } from "../service/WaitService";

export function useEcWidProduct(
  {
    storeId = `80971795`
  }) {

  const status = useScript(`https://app.ecwid.com/script.js?${ storeId }&data_platform=code&data_date=2022-12-02`)

  useEffect(() => {
    if (status === 'ready') {
      window.localStorage.setItem("show_ecwid_logs", "true")
      window.ecwid_script_defer = true;
      window.ec = window.ec || {};
      window.ec.storefront = window.ec.storefront || {};
      window.ec.storefront.enable_navigation = true;
      window.ec.storefront.product_details_layout = "THREE_COLUMNS_SIDEBAR_ON_THE_RIGHT";
      window.ec.storefront.product_details_gallery_layout = "SINGLE_IMAGE";
      window.ec.storefront.product_details_two_columns_with_right_sidebar_show_product_description_on_sidebar = false;
      window.ec.storefront.product_details_two_columns_with_left_sidebar_show_product_description_on_sidebar = false;
      window.ec.storefront.product_details_show_product_name = true;
      window.ec.storefront.product_details_show_breadcrumbs = true;
      window.ec.storefront.product_details_show_product_sku = false;
      window.ec.storefront.product_details_show_product_price = true;
      window.ec.storefront.product_details_show_in_stock_label = true;
      window.ec.storefront.product_details_show_number_of_items_in_stock = true;
      window.ec.storefront.product_details_show_qty = true;
      window.ec.storefront.product_details_show_wholesale_prices = true;
      window.ec.storefront.product_details_show_product_options = true;
      window.ec.storefront.product_details_show_product_description = true;
      window.ec.storefront.product_details_show_delivery_time = undefined;
      window.ec.storefront.product_details_show_share_buttons = true;
      window.ec.storefront.product_details_position_product_name = 100;
      window.ec.storefront.product_details_position_breadcrumbs = 200;
      window.ec.storefront.product_details_position_product_sku = 300;
      window.ec.storefront.product_details_position_product_price = 400;
      window.ec.storefront.product_details_position_product_options = undefined;
      window.ec.storefront.product_details_position_buy_button = 600;
      window.ec.storefront.product_details_position_wholesale_prices = 700;
      window.ec.storefront.product_details_position_product_description = 800;
      window.ec.storefront.product_details_position_delivery_time = undefined;
      window.ec.storefront.product_details_position_share_buttons = 900;
      window.ec.storefront.product_details_position_subtitle = 500;
      window.ec.storefront.product_details_show_subtitle = true;

      let productId = `504852545`;

      if (typeof xProductBrowser === 'function') {
        // eslint-disable-next-line no-undef
        xProductBrowser("categoriesPerRow=3", "views=grid(20,3) list(60) table(60)", "categoryView=grid", "searchView=list", `defaultProductId=${ productId }`, `id=my-store-${ storeId }`);
      }

      waitForElm('div.product-details-module.details-product-option.details-product-option--checkbox').then((elm) => {
        const firstProductRow = elm.getElementsByClassName('product-details-module__content')[0]
        let children = firstProductRow.children;
        [...children].forEach(child => {
          const checkBox = child.getElementsByClassName('form-control__checkbox')[0]
          checkBox.checked = true
        })
      });

      // setTimeout(() => {
      //   const start = (async () => {
      //     const $el = await waitForElement(`.product-details-module__content`);
      //     console.log($el);
      //     let firstProductRow = document.querySelectorAll('.product-details-module__content')[0];
      //     console.log(firstProductRow)
      //   })();
      // }, 1000)
    }
  }, [ status, storeId ])
  return status;
}