/* tslint:disable */
// This file was automatically generated and should not be edited.

import { MenuLocation } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: WP_FetchMenuByLocation
// ====================================================

export interface WP_FetchMenuByLocation_menus_nodes_menuItems_nodes {
  __typename: "MenuItem";
  /**
   * Relay ID of the menu item.
   */
  id: string;
  /**
   * Label or title of the menu item.
   */
  label: string | null;
  /**
   * URL or destination of the menu item.
   */
  url: string | null;
  /**
   * Target attribute for the menu item link.
   */
  target: string | null;
  /**
   * Class attribute for the menu item link
   */
  cssClasses: (string | null)[] | null;
}

export interface WP_FetchMenuByLocation_menus_nodes_menuItems {
  __typename: "MenuItemsConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (WP_FetchMenuByLocation_menus_nodes_menuItems_nodes | null)[] | null;
}

export interface WP_FetchMenuByLocation_menus_nodes {
  __typename: "Menu";
  /**
   * ID of the nav menu.
   */
  id: string;
  /**
   * Display name of the menu. Equivalent to WP_Term-&gt;name.
   */
  name: string | null;
  /**
   * A collection of menu item objects
   */
  menuItems: WP_FetchMenuByLocation_menus_nodes_menuItems | null;
}

export interface WP_FetchMenuByLocation_menus {
  __typename: "MenusConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (WP_FetchMenuByLocation_menus_nodes | null)[] | null;
}

export interface WP_FetchMenuByLocation {
  /**
   * A collection of menu objects
   */
  menus: WP_FetchMenuByLocation_menus | null;
}

export interface WP_FetchMenuByLocationVariables {
  location: MenuLocation;
}
