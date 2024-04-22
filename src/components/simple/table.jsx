/* eslint-disable react/jsx-key */
"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Tooltip from '@mui/joy/Tooltip';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { visuallyHidden } from '@mui/utils';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {InputControl as MUIFormControl} from './input';
import{ ModalComponent as MUIModal} from './modal';

// Generics
function createData(id,name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <thead>
      <tr>
        <th>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{
              input: {
                'aria-label': 'todos',
              },
            }}
            sx={{ verticalAlign: 'sub' }}
          />
        </th>
        {props.headCells.map((headCell) => {
          const active = orderBy === headCell.id;
          return (
            <th
              key={headCell.id}
              aria-sort={
                active ? { asc: 'ascending', desc: 'descending' }[order] : undefined
              }
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link
                underline="none"
                color="neutral"
                textColor={active ? 'primary.plainColor' : undefined}
                component="button"
                onClick={createSortHandler(headCell.id)}
                fontWeight="lg"
                startDecorator={
                  headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                endDecorator={
                  !headCell.numeric ? (
                    <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
                  ) : null
                }
                sx={{
                  '& svg': {
                    transition: '0.2s',
                    transform:
                      active && order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                  },
                  '&:hover': { '& svg': { opacity: 1 } },
                }}
              >
                {headCell.label}
                {active ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array,
};
function EnhancedTableToolbar(props) {
  const numSelected = props.numSelected;
  async function deleteOnClick(selected) {
    //logia de eliminacion
    console.log(selected);
    const deletePromises = selected.map(async (item) => {
      console.log(item);
      await props.deleteProp(item);
    });
    await Promise.all(deletePromises);
  }
  
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 1,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: 'background.level1',
        }),
        borderTopLeftRadius: 'var(--unstable_actionRadius)',
        borderTopRightRadius: 'var(--unstable_actionRadius)',
      }}
    >
      {
      numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          level="body-lg"
          sx={{ flex: '1 1 100%' }}
          id="tableTitle"
          component="div"
        >
          {props.title}
        </Typography>
      )
      }

      {numSelected > 0 ? (
          <IconButton id="Delete" size="sm" color="danger" variant="solid" onClick={(event) => deleteOnClick(props.selected)} >
            <DeleteIcon/>
          </IconButton>
      ) : (
        <Tooltip title="Filter list">
          <IconButton size="sm" variant="outlined" color="neutral">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  selected: PropTypes.array,
  deleteProp: PropTypes.any,
};

// END GENERICS

export default function TableData(props) {
// Props for TableData:
// - rows (Array<Object>): Data to be displayed in the table. If not provided, default data is used.
// - heads (Array<string>): Column headers for the table. Optional; if not provided, default headers are used.
// - dataType (Object): An object specifying data type details for modal editing.
// - deleteProp (Function): Callback function to handle the deletion of rows.
// - editProp (Function): Callback function to handle the editing of row data.


  // DEFAULT
    const titles = ["id",'data', 'default', 'pendejo', 'creelo', 'bien',"boton"]; 
    const rowsDefault = [
      createData(142,'Cupcake', 305, 3.7, 67, 4.3),
      createData(2,'Donut', 452, 25.0, 51, 4.9),
      createData(3,'Eclair', 262, 16.0, 24, 6.0),
      createData(4,'Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
      createData(6,'Honeycomb', 408, 3.2, 87, 6.5),
      createData(7,'Ice cream sandwich', 237, 9.0, 37, 4.3),
    ];
    const rows = props.rows? props.rows : rowsDefault

  // MANEJA CLICK EN FILAS
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [selected, setSelected] = React.useState([]);
    const isSelected = (name) => selected.indexOf(name) !== -1;
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = rows.map((n) => n.name);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };
    const handleClick = (name) => {
      console.log(selected)
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    };

    // SORT  
        const [order, setOrder] = React.useState('asc');
        const [orderBy, setOrderBy] = React.useState('id');
        const handleRequestSort = (event, property) => {
          const isAsc = orderBy === property && order === 'asc';
          setOrder(isAsc ? 'desc' : 'asc');
          setOrderBy(property);
        };

  // PAGINADO
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
      
    const handleChangePage = (newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event, newValue) => {
      setRowsPerPage(parseInt(newValue.toString(), 10));
      setPage(0);
    };
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
  // HEAD
  const headCells = props.heads? generateHeadCells(props.heads.concat("")): generateHeadCells(titles);
    function generateHeadCells(titles) {
        if (!Array.isArray(titles) || titles.length === 0) {
          return [];
        } 
        const headCells = titles.map((title, index) => {
          const isNumeric = index !== 0; 
          const disablePadding = index === 0;
          return {
            id: title,
            numeric: isNumeric,
            disablePadding: disablePadding,
            label: title,
          };
        });
      
        return headCells;
      }
  // MODAL
  const [dataMod,setDataMod] = React.useState(props.dataType);
  const handleOpenModal = (row) => {
    setSelectedRow(row);
  }
  async function handleCloseModalAccept(row, selectedRow) {
    // Actualiza los datos en la función editProp
    dataMod.actualizarDesdeDatos(selectedRow)
    await props.editProp(dataMod);
    selected.pop();
    setSelectedRow();
    setDataMod(props.dataType); // Limpia el estado de dataMod si es necesario
  }
  
  const handleCloseModalCancel = (row) => {
      selected.pop();
      setSelectedRow();
      setDataMod(props.dataType); // Limpia el estado de dataMod si es necesario
    } 
    // EDICION
    // MANEJAR CAMBIO AÑADIR
    // nececito que aca se maneje el cambio de datos
    // Agrega esta función en tu componente TableSortAndSelection
    const handleInputChange = (event, campo) => {
      dataMod[campo] = event.target.value;
      setDataMod(dataMod);
      console.log("UPDATE: ",campo,": ",event.target.value," RESULT : ", dataMod[campo])
    };

  return (
    <Sheet
      variant="outlined"
      sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm' }}
    >
      <EnhancedTableToolbar numSelected={selected.length} selected={selected} deleteProp={props.deleteProp} />
      <Table
        aria-labelledby="tableTitle"
        hoverRow
        sx={{
          '--TableCell-headBackground': 'transparent',
          '--TableCell-selectedBackground': (theme) =>
            theme.vars.palette.success.softBg,
          '& thead th:nth-child(1)': {
            width: '40px',
          },
          '& thead th:nth-child(2)': {
            width: '40px',
          },
          '& tr > *:nth-child(n+3)': { textAlign: 'right' },
        }}
      >
        <EnhancedTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
          headCells={props.headCells? props.headCell: headCells}
        />
        <tbody>
          {stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <React.Fragment>
                <tr
                  onClick={(event) => handleClick(row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  style={
                    isItemSelected
                      ? {
                          '--TableCell-dataBackground':
                            'var(--TableCell-selectedBackground)',
                          '--TableCell-headBackground':
                            'var(--TableCell-selectedBackground)',
                        }
                      : {}
                  }
                >
                  <th scope="row">
                    <Checkbox
                      checked={isItemSelected}
                      slotProps={{
                        input: {
                          'aria-labelledby': labelId,
                        },
                      }}
                      sx={{ verticalAlign: 'top' }}
                    />
                  </th>
                  {Object.keys(row).map((key) => (
                    props.heads.includes(key)? <td key={key}>{row[key]}</td> : <React.Fragment/>
                  ))}          
                  <td>
                    <MoreHorizIcon onClick={() => handleOpenModal(row)} style={{ cursor: 'pointer' }}/>
                  </td>
                  
                </tr>

                {selectedRow && (
                  <MUIModal
                    open={selectedRow !== null}
                    handleClickClose={(event) => handleCloseModalCancel(row)}
                    handleClickAccept={(event) => handleCloseModalAccept(row,selectedRow)}
                    title="Editar"
                    content={
                      Object.keys(selectedRow).map((key) => (
                        <MUIFormControl key={key} label={key} defaultValue={selectedRow[key]} onChange={(event) => handleInputChange(event, key)}/>
                      ))
                    }
                  />
                )}
                </React.Fragment>
              );
              
            })}
          {emptyRows > 0 && (
            <tr
              style={{
                height: `calc(${emptyRows} * 40px)`,
                '--TableRow-hoverBackground': 'transparent',
              }}
            >
              <td colSpan={rows.length} aria-hidden />
            </tr>
          )}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={headCells.length+1}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  justifyContent: 'flex-end',
                }}
              >
                <FormControl orientation="horizontal" size="sm">
                  <Select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={25}>25</Option>
                  </Select>
                </FormControl>              
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={page === 0}
                    onClick={() => handleChangePage(page - 1)}
                    sx={{ bgcolor: 'background.surface' }}
                  >
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    size="sm"
                    color="neutral"
                    variant="outlined"
                    disabled={
                      rows.length !== -1
                        ? page >= Math.ceil(rows.length / rowsPerPage) - 1
                        : false
                    }
                    onClick={() => handleChangePage(page + 1)}
                    sx={{ bgcolor: 'background.surface' }}
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              </Box>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Sheet>
  );
}