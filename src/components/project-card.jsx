// ProjectCard.tsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Project {
  nom: string;
  description: string;
  position: string;
  secteur: string;
  budgetRestant: string;
  partenaires: string[];
  email: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="project">
            {project.nom[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={project.nom}
        subheader={project.position}
      />
      <CardMedia
        component="img"
        height="194"
        image=
        alt="Project visual"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
        <IconButton aria-label="share"><ShareIcon /></IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography><strong>Secteur:</strong> {project.secteur}</Typography>
          <Typography><strong>Budget restant:</strong> {project.budgetRestant}</Typography>
          <Typography><strong>Email:</strong> {project.email}</Typography>
          <Typography><strong>Partenaires:</strong> {project.partenaires.join(', ')}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
