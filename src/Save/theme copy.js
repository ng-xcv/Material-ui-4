import { blue } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
   palette: {
      success: {
         light: "#4CAF50",
         main: "#388E3C",
      },
      danger: {
         light: "##FFCDD2",
         main: "#F44336",
         dark: "#D32F2F",
      },
      primary: {
         main: blue[500],
      },
   },
});
