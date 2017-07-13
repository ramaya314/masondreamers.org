import React from 'react';

import {
  Route
} from 'react-router-dom';


import MasonDreamersContactPage from './pages/MasonDreamersContactPage';
import UndocuAllyDirectoryPage from './pages/UndocuAllyDirectoryPage';
import DACASanctuaryPetitionPage from './pages/DACASanctuaryPetitionPage';
import DACAPetitionSignaturesPage from './pages/DACAPetitionSignaturesPage';

import AdvisoryBoardPage from './pages/AdvisoryBoardPage';
import AdvisoryBoardTable from './components/AdvisoryBoardTable';
import EventsPage from './pages/EventsPage';
import ContactUsPage from './pages/ContactUsPage';
import MeetOurTeamPage from './pages/MeetOurTeamPage';
import ResourcesPage from './pages/ResourcesPage';
import SupportUsPage from './pages/SupportUsPage';
import BecomeAnAllyPage from './pages/BecomeAnAllyPage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';

import ScrollToTopRoute from './components/ScrollToTopRoute'

import Master from './Master';

const AppRoutes = (
  <div>

    <ScrollToTopRoute exact path="/" component={Master}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/advBoard" component={AdvisoryBoardPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/events" component={EventsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/contactus" component={ContactUsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/meetOurTeam" component={MeetOurTeamPage}>
    </ScrollToTopRoute>


    <ScrollToTopRoute path="/resources" component={ResourcesPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/becomeanally" component={BecomeAnAllyPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/supportus" component={SupportUsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/news" component={NewsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/gallery" component={GalleryPage}>
    </ScrollToTopRoute>

    <Route path="/masondreamerscontact" component={MasonDreamersContactPage}>
    </Route>
    <Route path="/undocuallydirectory" component={UndocuAllyDirectoryPage}>
    </Route>
    <Route path="/dacaSanctuaryPetition" component={DACASanctuaryPetitionPage}>
    </Route>
    <Route path="/dacaSanctuaryPetitionSignatures" component={DACAPetitionSignaturesPage}>
    </Route>
    <Route path="/advisoryBoard" component={AdvisoryBoardTable}>
    </Route>

  </div>
);

export default AppRoutes;