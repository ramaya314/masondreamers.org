import React from 'react'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import {Provider} from 'react-redux'
import {StaticRouter} from 'react-router-dom'
import Master, {MasterFactory} from './Master';

import MetaTagsServer from 'react-meta-tags/server';
import {MetaTagsContext} from 'react-meta-tags';

import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName } from '@material-ui/core/styles';

export function render(req, store, context){

  const metaTagsInstance = MetaTagsServer();

  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();

  const out = renderToString(
    <Provider store={store}>
      <MetaTagsContext extract={metaTagsInstance && metaTagsInstance.extract}>
        <StaticRouter
          location={req.url}
          context={context} >
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
              {MasterFactory(new Map())}
            </JssProvider>

        </StaticRouter>
      </MetaTagsContext>
    </Provider>
  );

  context.head = metaTagsInstance.renderToString();
  context.muiCss = sheetsRegistry.toString();

  return out;
}
