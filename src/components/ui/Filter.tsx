import { FilterCategory } from "@/lib/definitions";
import { FilterAltIcon } from "@/lib/icons";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";

interface FilterProps {
    categories: FilterCategory[];
}
  
export default function Filter({ categories }: FilterProps) {
    return (
        <Card sx={{ display: "flex", borderRadius: "15px", padding: "30px", width:"20%"}}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "80%", gap:"1rem" }}>
            <Box sx={{ display: "flex", flexDirection: "row", borderBottom:"1px solid lightgray", width: "100%", padding:"10px"}}>
            <FilterAltIcon sx={{fontSize:"30px"}}/>
            <Typography variant="h5">Filtros</Typography>
            </Box>

            {categories.map((category, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column", marginTop: "10px", borderBottom:"1px solid lightgray"}}>
                <Typography variant="h6">{category.name}</Typography>
                {category.filters.map((filter, index) => (
                <FormControlLabel
                    key={index}
                    control={<Checkbox />}
                    label={filter}
                    sx={{marginLeft: "10px"}}
                />
                ))}
            </Box>
            ))}
        </Box>
        </Card>
    );
}