import { Divider, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Ad
        </Typography>
        <Typography color={medium}>CRYPTOCSSSERT</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/adnum1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>CryptoHonest</Typography>
        <Typography color={medium}>CryptoHonest.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Take your leap into the world on crypto currencies with CryptoHonest !
      </Typography>

      <Divider />

      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Ad
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/aduni.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>המוסד האוניברסטאי כליימן</Typography>
        <Typography color={medium}>
          תואר ראשון ושני במערכות מידע בחינם!
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        הצטרפו היום!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
