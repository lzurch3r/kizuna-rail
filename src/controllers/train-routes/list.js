import { getAllRoutes, getListOfRegions, getListOfSeasons, getRoutesByRegion, getRoutesBySeason } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    const routes = await getAllRoutes();
    const seasons = await getListOfSeasons();
    const regionFilter = req.query.region;
    const seasonFilter = req.query.season;

    // Define valid regions and seasons for sorting
    const validRegions = regions;
    const validSeasons = seasons;

    // Validate if provided
    if (regionFilter && !validRegions.includes(regionFilter)) {
        return res.status(400).send('Invalid region. Must be a valid region from the list.')
    }
    if (seasonFilter && !validSeasons.includes(seasonFilter)) {
        return res.status(400).send('Invalid season. Must be a valid season from the list.')
    }

    // Use validated view or default
    const finalRegion = regionFilter || 'all';
    const finalSeason = seasonFilter || 'all';

    if (finalRegion !== 'all') {
        const filterByRegion = await getRoutesByRegion(finalRegion);

        if (finalSeason !== 'all') {
            const filterBySeason = await getRoutesBySeason(finalSeason);
            const finalRoutes = new Set(filterByRegion.concat(filterBySeason));

            res.render('routes/list', { 
            title: 'Scenic Train Routes',
            regions,
            routes: finalRoutes,
            seasons,
            });
        }
        else {        
            res.render('routes/list', { 
            title: 'Scenic Train Routes',
            regions,
            routes: filterByRegion,
            seasons,
            });
        }

    }
    else {
       res.render('routes/list', { 
           title: 'Scenic Train Routes',
           regions,
           routes: routes,
           seasons,
       });
    }
};