
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Projects from './ProjectsPage'


const secteurs = [
  'Financement Participatif',
  'E-commerce',
  'Ressources humaines',
];

const budgetRanges = [
  { label: '< 10k', value: '<10k' },
  { label: '10k - 100k', value: '10k-100k' },
  { label: '> 100k', value: '>100k' },
];

export default function CheckboxFilter({
  selectedSecteurs,
  setSelectedSecteurs,
  selectedBudget,
  setSelectedBudget,
}: {
  selectedSecteurs: string[];
  setSelectedSecteurs: (secteurs: string[]) => void;
  selectedBudget: string[];
  setSelectedBudget: (budget: string[]) => void;
}) {
  const toggleSecteur = (secteur: string) => {
    setSelectedSecteurs((prev) =>
      prev.includes(secteur)
        ? prev.filter((s) => s !== secteur)
        : [...prev, secteur]
    );
  };

  const toggleBudget = (range: string) => {
    setSelectedBudget((prev) =>
      prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range]
    );
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Filtrer par secteur" />
      </ListItem>
      {secteurs.map((secteur) => (
        <ListItem key={secteur} disablePadding>
          <ListItemButton onClick={() => toggleSecteur(secteur)} dense>
            <ListItemIcon>
              <Checkbox checked={selectedSecteurs.includes(secteur)} />
            </ListItemIcon>
            <ListItemText primary={secteur} />
          </ListItemButton>
        </ListItem>
      ))}
      <Divider sx={{ my: 1 }} />
      <ListItem>
        <ListItemText primary="Filtrer par budget" />
      </ListItem>
      {budgetRanges.map((range) => (
        <ListItem key={range.value} disablePadding>
          <ListItemButton onClick={() => toggleBudget(range.value)} dense>
            <ListItemIcon>
              <Checkbox checked={selectedBudget.includes(range.value)} />
            </ListItemIcon>
            <ListItemText primary={range.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
