import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import CheckboxFilter from './CheckboxFilter';
import ProjectCard from './ProjectCard';

const projets = [
  {
    nom: "good partners",
    description: "ejnsfvbnjqsjkv",
    position: "tunis",
    secteur: "Financement Participatif",
    budgetRestant: "30 000 €",
    partenaires: ["Stripe", "aslain"],
    email: "goodpartnerscluster@gmail.com",
  },
  {
    nom: "GreenMarket",
    description: "Marketplace",
    position: "cbjqskdvhbjqz",
    secteur: "E-commerce",
    budgetRestant: "1 2051650 €",
    partenaires: ["PayPal"],
    email: "dev@greenmarket.fr",
  },
  {
    nom: "sdsdvsdfbf",
    description: "vqfsdbqbsebqtnbsrt",
    position: "Designer",
    secteur: "Ressources humaines",
    budgetRestant: "5 800 €",
    partenaires: ["LinkedIn API"],
    email: "info@skillmatch.io",
  },
];

const cleanBudget = (budgetStr: string): number => {
  return parseInt(budgetStr.replace(/\s|€|,/g, ''));
};

export default function ProjectsPage() {
  const [selectedSecteurs, setSelectedSecteurs] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string[]>([]);

  const filtered = projets.filter((proj) => {
    const secteurMatch =
      selectedSecteurs.length === 0 || selectedSecteurs.includes(proj.secteur.trim());

    const budget = cleanBudget(proj.budgetRestant);
    let budgetMatch = true;
    if (selectedBudget.length > 0) {
      budgetMatch = selectedBudget.some((range) => {
        if (range === '<10k') return budget < 10000;
        if (range === '10k-100k') return budget >= 10000 && budget <= 100000;
        if (range === '>100k') return budget > 100000;
        return false;
      });
    }

    return secteurMatch && budgetMatch;
  });

  return (
    <Box sx={{ display: 'flex', padding: 2 }}>
      <Box sx={{ width: 300 }}>
        <CheckboxFilter
          selectedSecteurs={selectedSecteurs}
          setSelectedSecteurs={setSelectedSecteurs}
          selectedBudget={selectedBudget}
          setSelectedBudget={setSelectedBudget}
        />
      </Box>
      <Box sx={{ flex: 1, pl: 2 }}>
        <Grid container spacing={2}>
          {filtered.map((proj, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <ProjectCard project={proj} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
