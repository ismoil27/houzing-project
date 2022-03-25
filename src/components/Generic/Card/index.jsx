import React from "react";
import { Wrapper } from "./style";

export const GenericCard = (value) => {
  return (
    <Wrapper>
      <Wrapper.Image>
        <Wrapper.Button top="20px" left="20px" background="#0061df">
          FEATURED
        </Wrapper.Button>
        <Wrapper.Button top="20px" right="20px">
          FOR SALE
        </Wrapper.Button>
        <Wrapper.SmallImg />
      </Wrapper.Image>
      <Wrapper.Details>
        <Wrapper.DetailsTop>
          <Wrapper.Title>{value?.name || "No Title"}</Wrapper.Title>
          <Wrapper.Address>{value?.address || "No Address"}</Wrapper.Address>
          <Wrapper.Features>
            <Wrapper.Items>
              <Wrapper.Bed />
              <Wrapper.AmountText>
                {value?.houseDetails ? value?.houseDetails : "0"}Beds
              </Wrapper.AmountText>
            </Wrapper.Items>
            <Wrapper.Items>
              <Wrapper.Bath />
              <Wrapper.AmountText>
                {value?.houseDetails ? value?.houseDetails : "0"}Baths
              </Wrapper.AmountText>
            </Wrapper.Items>
            <Wrapper.Items>
              <Wrapper.Car />
              <Wrapper.AmountText>
                {value?.houseDetails ? value?.houseDetails : "No Garage"}
              </Wrapper.AmountText>
            </Wrapper.Items>
            <Wrapper.Items>
              <Wrapper.Ruler />
              <Wrapper.AmountText>
                {value?.houseDetails ? value?.houseDetails : "0"}Sq Ft
              </Wrapper.AmountText>
            </Wrapper.Items>
          </Wrapper.Features>
        </Wrapper.DetailsTop>

        <Wrapper.Bottom>
          <span>${value?.price}/mo</span>
          <span>
            <Wrapper.ReSize /> <Wrapper.Plus /> <Wrapper.Heart />
          </span>
        </Wrapper.Bottom>
      </Wrapper.Details>
    </Wrapper>
  );
};
export default GenericCard;
