/**
 * @memberOf module:extension/style
 * @class FeatureStyleExtension
 */

var FeatureStyles = require('./featureStyles')
	, FeatureStyle = require('./featureStyle')
	, Styles = require('./styles')
	, Icons = require('./icons');


/**
 * Feature Table Styles, styles and icons for an individual feature table
 * @param  {module:geoPackage~GeoPackage} geoPackage GeoPackage object
 * @param {String} tableName
 * @constructor
 */
var FeatureTableStyles = function(geoPackage, tableName) {
	this.featureStyleExtension = geoPackage.getFeatureStyleExtension();
	this.cachedTableFeatureStyles = new FeatureStyles();
	this.tableName = tableName;
};

/**
 * Get the feature style extension
 * @return {module:extension/style.FeatureStyleExtension} feature style extension
 */
FeatureTableStyles.prototype.getFeatureStyleExtension = function() {
	return this.featureStyleExtension;
};

/**
 * Get the feature table name
 * @return {String} feature table name
 */
FeatureTableStyles.prototype.getTableName = function() {
	return this.tableName;
};

/**
 * Determine if the GeoPackage has the extension for the table
 * @return {Boolean} true if has extension
 */
FeatureTableStyles.prototype.has = function() {
	return this.featureStyleExtension.has(this.tableName);
};

/**
 * Create style, icon, table style, and table icon relationships for the
 * feature table
 * @return {Promise}
 */
FeatureTableStyles.prototype.createRelationships = function() {
	return this.featureStyleExtension.createRelationships(this.tableName);
};

/**
 * Check if feature table has a style, icon, table style, or table icon
 * relationships
 * @return {Boolean} true if has a relationship
 */
FeatureTableStyles.prototype.hasRelationship = function() {
	return this.featureStyleExtension.hasRelationship(this.tableName);
};

/**
 * Create a style relationship for the feature table
 * @return {Promise}
 */
FeatureTableStyles.prototype.createStyleRelationship = function() {
	return this.featureStyleExtension.createStyleRelationship(this.tableName);
};

/**
 * Determine if a style relationship exists for the feature table
 * @return {Boolean} true if relationship exists
 */
FeatureTableStyles.prototype.hasStyleRelationship = function() {
	return this.featureStyleExtension.hasStyleRelationship(this.tableName);
};

/**
 * Create a feature table style relationship
 * @return {Promise}
 */
FeatureTableStyles.prototype.createTableStyleRelationship = function() {
	return this.featureStyleExtension.createTableStyleRelationship(this.tableName);
};

/**
 * Determine if feature table style relationship exists
 *
 * @return {Boolean} true if relationship exists
 */
FeatureTableStyles.prototype.hasTableStyleRelationship = function() {
	return this.featureStyleExtension.hasTableStyleRelationship(this.tableName);
};

/**
 * Create an icon relationship for the feature table
 * @return {Promise}
 */
FeatureTableStyles.prototype.createIconRelationship = function() {
	return this.featureStyleExtension.createIconRelationship(this.tableName);
};

/**
 * Determine if an icon relationship exists for the feature table
 * @return {Boolean} true if relationship exists
 */
FeatureTableStyles.prototype.hasIconRelationship = function() {
	return this.featureStyleExtension.hasIconRelationship(this.tableName);
};

/**
 * Create a feature table icon relationship
 * @return {Promise}
 */
FeatureTableStyles.prototype.createTableIconRelationship = function() {
	return this.featureStyleExtension.createTableIconRelationship(this.tableName);
};

/**
 * Determine if feature table icon relationship exists
 * @return {Boolean} true if relationship exists
 */
FeatureTableStyles.prototype.hasTableIconRelationship = function() {
	return this.featureStyleExtension.hasTableIconRelationship(this.tableName);
};

/**
 * Delete the style and icon table and row relationships for the feature
 * table
 */
FeatureTableStyles.prototype.deleteRelationships = function() {
	this.featureStyleExtension.deleteRelationships(this.tableName);
};

/**
 * Delete a style relationship for the feature table
 */
FeatureTableStyles.prototype.deleteStyleRelationship = function() {
	this.featureStyleExtension.deleteStyleRelationship(this.tableName);
};

/**
 * Delete a table style relationship for the feature table
 */
FeatureTableStyles.prototype.deleteTableStyleRelationship = function() {
	this.featureStyleExtension.deleteTableStyleRelationship(this.tableName);
};

/**
 * Delete a icon relationship for the feature table
 */
FeatureTableStyles.prototype.deleteIconRelationship = function() {
	this.featureStyleExtension.deleteIconRelationship(this.tableName);
};

/**
 * Delete a table icon relationship for the feature table
 */
FeatureTableStyles.prototype.deleteTableIconRelationship = function() {
	this.featureStyleExtension.deleteTableIconRelationship(this.tableName);
};

/**
 * Get a Style Mapping DAO
 * @return {module:extension/style.StyleMappingDao} style mapping DAO
 */
FeatureTableStyles.prototype.getStyleMappingDao = function() {
	return this.featureStyleExtension.getStyleMappingDao(this.tableName);
};

/**
 * Get a Table Style Mapping DAO
 * @return {module:extension/style.StyleMappingDao} table style mapping DAO
 */
FeatureTableStyles.prototype.getTableStyleMappingDao = function() {
	return this.featureStyleExtension.getTableStyleMappingDao(this.tableName);
};

/**
 * Get a Icon Mapping DAO
 * @return {module:extension/style.StyleMappingDao} icon mapping DAO
 */
FeatureTableStyles.prototype.getIconMappingDao = function() {
	return this.featureStyleExtension.getIconMappingDao(this.tableName);
};

/**
 * Get a Table Icon Mapping DAO
 * @return {module:extension/style.StyleMappingDao} table icon mapping DAO
 */
FeatureTableStyles.prototype.getTableIconMappingDao = function() {
	return this.featureStyleExtension.getTableIconMappingDao(this.tableName);
};

/**
 * Get a style DAO
 * @return {module:extension/style.StyleDao} style DAO
 */
FeatureTableStyles.prototype.getStyleDao = function() {
	return this.featureStyleExtension.getStyleDao();
};

/**
 * Get a icon DAO
 * @return {module:extension/style.IconDao} icon DAO
 */
FeatureTableStyles.prototype.getIconDao = function() {
	return this.featureStyleExtension.getIconDao();
};

/**
 * Get the table feature styles
 * @return {module:extension/style.FeatureStyles} table feature styles or null
 */
FeatureTableStyles.prototype.getTableFeatureStyles = function() {
	return this.featureStyleExtension.getTableFeatureStyles(this.tableName);
};

/**
 * Get the table styles
 * @return {module:extension/style.Styles} table styles or null
 */
FeatureTableStyles.prototype.getTableStyles = function() {
	return this.featureStyleExtension.getTableStyles(this.tableName);
};

/**
 * Get the cached table styles, querying and caching if needed
 * @return {module:extension/style.Styles} cached table styles
 */
FeatureTableStyles.prototype.getCachedTableStyles = function() {
	var styles = this.cachedTableFeatureStyles.getStyles();
	if (styles === null) {
		styles = this.cachedTableFeatureStyles.getStyles();
		if (styles === null) {
			styles = this.getTableStyles();
			if (styles === null) {
				styles = new Styles();
			}
			this.cachedTableFeatureStyles.setStyles(styles);
		}
	}
	if (styles.isEmpty()) {
		styles = null;
	}
	return styles;
};

/**
 * Get the table style of the geometry type
 * @param {String} geometryType geometry type
 * @return {module:extension/style.StyleRow} style row
 */
FeatureTableStyles.prototype.getTableStyle = function(geometryType) {
	return this.featureStyleExtension.getTableStyle(this.tableName, geometryType);
};

/**
 * Get the table style default
 * @return {module:extension/style.StyleRow} style row
 */
FeatureTableStyles.prototype.getTableStyleDefault = function() {
	return this.featureStyleExtension.getTableStyleDefault(this.tableName);
};

/**
 * Get the table icons
 * @return {module:extension/style.Icons} table icons or null
 */
FeatureTableStyles.prototype.getTableIcons = function() {
	return this.featureStyleExtension.getTableIcons(this.tableName);
};

/**
 * Get the cached table icons, querying and caching if needed
 * @return {module:extension/style.Icons} cached table icons
 */
FeatureTableStyles.prototype.getCachedTableIcons = function() {
	var icons = this.cachedTableFeatureStyles.getIcons();
	if (icons === null) {
		icons = this.cachedTableFeatureStyles.getIcons();
		if (icons === null) {
			icons = this.getTableIcons();
			if (icons === null) {
				icons = new Icons();
			}
			this.cachedTableFeatureStyles.setIcons(icons);
		}
	}
	if (icons.isEmpty()) {
		icons = null;
	}
	return icons;
};

/**
 * Get the table icon of the geometry type
 * @param {String} geometryType geometry type
 * @return {module:extension/style.IconRow} icon row
 */
FeatureTableStyles.prototype.getTableIcon = function(geometryType) {
	return this.featureStyleExtension.getTableIcon(this.tableName, geometryType);
};

/**
 * Get the table icon default
 * @return {module:extension/style.IconRow} icon row
 */
FeatureTableStyles.prototype.getTableIconDefault = function() {
	return this.featureStyleExtension.getTableIconDefault(this.tableName);
};

/**
 * Get the feature styles for the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.FeatureStyles} feature styles or null
 */
FeatureTableStyles.prototype.getFeatureStylesForFeatureRow = function(featureRow) {
	return this.featureStyleExtension.getFeatureStylesForFeatureRow(featureRow);
};

/**
 * Get the feature styles for the feature id
 *
 * @param {Number} featureId feature id
 * @return {module:extension/style.FeatureStyles} feature styles or null
 */
FeatureTableStyles.prototype.getFeatureStyles = function(featureId) {
	return this.featureStyleExtension.getFeatureStyles(this.tableName, featureId);
};

/**
 * Get the feature style (style and icon) of the feature row, searching in
 * order: feature geometry type style or icon, feature default style or
 * icon, table geometry type style or icon, table default style or icon
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.FeatureStyle} feature style
 */
FeatureTableStyles.prototype.getFeatureStyleForFeatureRow = function(featureRow) {
	return this.getFeatureStyleForFeatureRowAndGeometryType(featureRow, featureRow.getGeometryType());
};

/**
 * Get the feature style (style and icon) of the feature row with the
 * provided geometry type, searching in order: feature geometry type style
 * or icon, feature default style or icon, table geometry type style or
 * icon, table default style or icon
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {String} geometryType geometry type
 * @return {module:extension/style.FeatureStyle} feature style
 */
FeatureTableStyles.prototype.getFeatureStyleForFeatureRowAndGeometryType = function(featureRow, geometryType) {
	return this.getFeatureStyle(featureRow.getId(), geometryType);
};

/**
 * Get the feature style default (style and icon) of the feature row,
 * searching in order: feature default style or icon, table default style or
 * icon
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.FeatureStyle} feature style
 */
FeatureTableStyles.prototype.getFeatureStyleDefaultForFeatureRow = function(featureRow) {
	return this.getFeatureStyle(featureRow.getId(), null);
};

/**
 * Get the feature style (style and icon) of the feature, searching in
 * order: feature geometry type style or icon, feature default style or
 * icon, table geometry type style or icon, table default style or icon
 *
 * @param {Number} featureId feature id
 * @param {String} geometryType geometry type
 * @return {module:extension/style.FeatureStyle} feature style
 */
FeatureTableStyles.prototype.getFeatureStyle = function(featureId, geometryType) {
	var featureStyle = null;
	var style = this.getStyle(featureId, geometryType);
	var icon = this.getIcon(featureId, geometryType);
	if (style != null || icon != null) {
		featureStyle = new FeatureStyle(style, icon);
	}
	return featureStyle;
};

/**
 * Get the feature style (style and icon) of the feature, searching in
 * order: feature geometry type style or icon, feature default style or
 * icon, table geometry type style or icon, table default style or icon
 *
 * @param {Number} featureId feature id
 * @return {module:extension/style.FeatureStyle} feature style
 */
FeatureTableStyles.prototype.getFeatureStyleDefault = function(featureId) {
	return this.getFeatureStyle(featureId, null);
};

/**
 * Get the styles for the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.Styles} styles or null
 */
FeatureTableStyles.prototype.getStylesForFeatureRow = function(featureRow) {
	return this.featureStyleExtension.getStylesForFeatureRow(featureRow);
};

/**
 * Get the styles for the feature id
 *
 * @param {Number} featureId feature id
 * @return {module:extension/style.Styles}  styles or null
 */
FeatureTableStyles.prototype.getStylesForFeatureId = function(featureId) {
	return this.featureStyleExtension.getStylesForFeatureId(this.tableName, featureId);
};

/**
 * Get the style of the feature row, searching in order: feature geometry
 * type style, feature default style, table geometry type style, table
 * default style
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.StyleRow} style row
 */
FeatureTableStyles.prototype.getStyleForFeatureRow = function(featureRow) {
	return this.getStyleForFeatureRowAndGeometryType(featureRow, featureRow.getGeometryType());
};

/**
 * Get the style of the feature row with the provided geometry type,
 * searching in order: feature geometry type style, feature default style,
 * table geometry type style, table default style
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {String} geometryType geometry type
 * @return {module:extension/style.StyleRow} style row
 */
FeatureTableStyles.prototype.getStyleForFeatureRowAndGeometryType = function(featureRow, geometryType) {
	return this.getStyle(featureRow.getId(), geometryType);
};

/**
 * Get the default style of the feature row, searching in order: feature
 * default style, table default style
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.StyleRow} style row
 */
FeatureTableStyles.prototype.getStyleDefaultForFeatureRow = function(featureRow) {
	return this.getStyle(featureRow.getId(), null);
};

/**
 * Get the style of the feature, searching in order: feature geometry type
 * style, feature default style, table geometry type style, table default
 * style
 *
 * @param {Number} featureId feature id
 * @param {String} geometryType geometry type
 * @return {module:extension/style.StyleRow} style row
 */
FeatureTableStyles.prototype.getStyle = function(featureId, geometryType) {
	var styleRow = this.featureStyleExtension.getStyle(this.tableName, featureId, geometryType, false);
	if (styleRow === null) {
		// Table Style
		var styles = this.getCachedTableStyles();
		if (styles != null) {
			styleRow = styles.getStyle(geometryType);
		}
	}
	return styleRow;
};

/**
 * Get the default style of the feature, searching in order: feature default
 * style, table default style
 *
 * @param {Number} featureId feature id
 * @return {module:extension/style.StyleRow} style row
 */
FeatureTableStyles.prototype.getStyleDefault = function(featureId) {
	return this.getStyle(featureId, null);
};

/**
 * Get the icons for the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.Icons} icons or null
 */
FeatureTableStyles.prototype.getIconsForFeatureRow = function(featureRow) {
	return this.featureStyleExtension.getIconsForFeatureRow(featureRow);
};

/**
 * Get the icons for the feature id
 *
 * @param {Number} featureId feature id
 * @return {module:extension/style.Icons} icons or null
 */
FeatureTableStyles.prototype.getIconsForFeatureId = function(featureId) {
	return this.featureStyleExtension.getIconsForFeatureId(this.tableName, featureId);
};

/**
 * Get the icon of the feature row, searching in order: feature geometry
 * type icon, feature default icon, table geometry type icon, table default
 * icon
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.IconRow} icon row
 */
FeatureTableStyles.prototype.getIconForFeatureRow = function(featureRow) {
	return this.getIconForFeatureRowAndGeometryType(featureRow, featureRow.getGeometryType());
};

/**
 * Get the icon of the feature row with the provided geometry type,
 * searching in order: feature geometry type icon, feature default icon,
 * table geometry type icon, table default icon
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {String} geometryType geometry type
 * @return {module:extension/style.IconRow} icon row
 */
FeatureTableStyles.prototype.getIconForFeatureRowAndGeometryType = function(featureRow, geometryType) {
	return this.getIcon(featureRow.getId(), geometryType);
};

/**
 * Get the default icon of the feature row, searching in order: feature
 * default icon, table default icon
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @return {module:extension/style.IconRow} icon row
 */
FeatureTableStyles.prototype.getIconDefaultForFeatureRow = function(featureRow) {
	return this.getIcon(featureRow.getId(), null);
};

/**
 * Get the icon of the feature, searching in order: feature geometry type
 * icon, feature default icon, table geometry type icon, table default icon
 *
 * @param {Number} featureId feature id
 * @param {String} geometryType geometry type
 * @return {module:extension/style.IconRow} icon row
 */
FeatureTableStyles.prototype.getIcon = function(featureId, geometryType) {
	var iconRow = this.featureStyleExtension.getIcon(this.tableName, featureId, geometryType, false);
	if (iconRow === null) {
		// Table Icon
		var icons = this.getCachedTableIcons();
		if (icons != null) {
			iconRow = icons.getIcon(geometryType);
		}
	}
	return iconRow;
};

/**
 * Get the default icon of the feature, searching in order: feature default
 * icon, table default icon
 *
 * @param {Number} featureId feature id
 * @return {module:extension/style.IconRow} icon row
 */
FeatureTableStyles.prototype.getIconDefault = function(featureId) {
	return this.getIcon(featureId, null);
};

/**
 * Set the feature table default feature styles
 *
 * @param {module:extension/style.FeatureStyles} featureStyles default feature styles
 * @return {Promise}
 */
FeatureTableStyles.prototype.setTableFeatureStyles = function(featureStyles) {
	return this.featureStyleExtension.setTableFeatureStyles(this.tableName, featureStyles).then(function () {
		this.clearCachedTableFeatureStyles();
	}.bind(this));
};

/**
 * Set the feature table default styles
 *
 * @param {module:extension/style.Styles} styles default styles
 * @return {Promise}
 */
FeatureTableStyles.prototype.setTableStyles = function(styles) {
	return this.featureStyleExtension.setTableStyles(this.tableName, styles).then(function () {
		this.clearCachedTableStyles();
	}.bind(this));
};

/**
 * Set the feature table style default
 *
 * @param {module:extension/style.StyleRow} style style row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setTableStyleDefault = function(style) {
	return this.featureStyleExtension.setTableStyleDefault(this.tableName, style).then(function () {
		this.clearCachedTableStyles();
	}.bind(this));
};

/**
 * Set the feature table style for the geometry type
 *
 * @param {String} geometryType geometry type
 * @param {module:extension/style.StyleRow} style style row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setTableStyle = function(geometryType, style) {
	return this.featureStyleExtension.setTableStyle(this.tableName, geometryType, style).then(function () {
		this.clearCachedTableStyles();
	}.bind(this));
};

/**
 * Set the feature table default icons
 *
 * @param {module:extension/style.Icons} icons default icons
 * @return {Promise}
 */
FeatureTableStyles.prototype.setTableIcons = function(icons) {
	return this.featureStyleExtension.setTableIcons(this.tableName, icons).then(function () {
		this.clearCachedTableIcons();
	}.bind(this));
};

/**
 * Set the feature table icon default
 *
 * @param {module:extension/style.IconRow} icon icon row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setTableIconDefault = function(icon) {
	return this.featureStyleExtension.setTableIconDefault(this.tableName, icon).then(function () {
		this.clearCachedTableIcons();
	}.bind(this));
};

/**
 * Set the feature table icon for the geometry type
 *
 * @param {String} geometryType geometry type
 * @param {module:extension/style.IconRow} icon icon row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setTableIcon = function(geometryType, icon) {
	return this.featureStyleExtension.setTableIcon(this.tableName, geometryType, icon).then(function () {
		this.clearCachedTableIcons();
	}.bind(this));
};

/**
 * Set the feature styles for the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.FeatureStyles} featureStyles feature styles
 * @return {Promise}
 */
FeatureTableStyles.prototype.setFeatureStylesForFeatureRow = function(featureRow, featureStyles) {
	return this.featureStyleExtension.setFeatureStylesForFeatureRow(featureRow, featureStyles);
};

/**
 * Set the feature styles for the feature table and feature id
 *
 * @param {Number} featureId feature id
 * @param {module:extension/style.FeatureStyles} featureStyles feature styles
 * @return {Promise}
 */
FeatureTableStyles.prototype.setFeatureStyles = function(featureId, featureStyles) {
	return this.featureStyleExtension.setFeatureStyles(this.tableName, featureId, featureStyles);
};

/**
 * Set the feature style (style and icon) of the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.FeatureStyle} featureStyle feature style
 * @return {Promise}
 */
FeatureTableStyles.prototype.setFeatureStyleForFeatureRow = function(featureRow, featureStyle) {
	return this.featureStyleExtension.setFeatureStyleForFeatureRow(featureRow, featureStyle);
};

/**
 * Set the feature style (style and icon) of the feature row for the
 * specified geometry type
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {String} geometryType geometry type
 * @param {module:extension/style.FeatureStyle} featureStyle feature style
 * @return {Promise}
 */
FeatureTableStyles.prototype.setFeatureStyleForFeatureRowAndGeometryType = function(featureRow, geometryType, featureStyle) {
	return this.featureStyleExtension.setFeatureStyleForFeatureRowAndGeometryType(featureRow, geometryType, featureStyle);
};

/**
 * Set the feature style default (style and icon) of the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.FeatureStyle} featureStyle feature style
 * @return {Promise}
 */
FeatureTableStyles.prototype.setFeatureStyleDefaultForFeatureRow = function(featureRow, featureStyle) {
	return this.featureStyleExtension.setFeatureStyleDefaultForFeatureRow(featureRow, featureStyle);
};

/**
 * Set the feature style (style and icon) of the feature
 *
 * @param {Number} featureId feature id
 * @param {String} geometryType geometry type
 * @param {module:extension/style.FeatureStyle} featureStyle feature style
 * @return {Promise}
 */
FeatureTableStyles.prototype.setFeatureStyle = function(featureId, geometryType, featureStyle) {
	return this.featureStyleExtension.setFeatureStyle(this.tableName, featureId, geometryType, featureStyle);
};

/**
 * Set the feature style (style and icon) of the feature
 *
 * @param {Number} featureId feature id
 * @param {module:extension/style.FeatureStyle} featureStyle feature style
 * @return {Promise}
 */
FeatureTableStyles.prototype.setFeatureStyleDefault = function(featureId, featureStyle) {
	return this.featureStyleExtension.setFeatureStyleDefault(this.tableName, featureId, featureStyle);
};

/**
 * Set the styles for the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.StyleRow} styles styles
 * @return {Promise}
 */
FeatureTableStyles.prototype.setStylesForFeatureRow = function(featureRow, styles) {
	return this.featureStyleExtension.setStylesForFeatureRow(featureRow, styles);
};

/**
 * Set the styles for the feature table and feature id
 *
 * @param {Number} featureId feature id
 * @param {module:extension/style.Styles} styles styles
 * @return {Promise}
 */
FeatureTableStyles.prototype.setStyles = function(featureId, styles) {
	return this.featureStyleExtension.setStyles(this.tableName, featureId, styles);
};

/**
 * Set the style of the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.StyleRow} style style row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setStyleForFeatureRow = function(featureRow, style) {
	return this.featureStyleExtension.setStyleForFeatureRow(featureRow, style);
};

/**
 * Set the style of the feature row for the specified geometry type
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {String} geometryType geometry type
 * @param {module:extension/style.StyleRow} style style row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setStyleForFeatureRowAndGeometryType = function(featureRow, geometryType, style) {
	return this.featureStyleExtension.setStyleForFeatureRowAndGeometryType(featureRow, geometryType, style);
};

/**
 * Set the default style of the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.StyleRow} style style row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setStyleDefaultForFeatureRow = function(featureRow, style) {
	return this.featureStyleExtension.setStyleDefaultForFeatureRow(featureRow, style);
};

/**
 * Set the style of the feature
 *
 * @param {Number} featureId feature id
 * @param {String} geometryType geometry type
 * @param {module:extension/style.StyleRow} style style row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setStyle = function(featureId, geometryType, style) {
	return this.featureStyleExtension.setStyle(this.tableName, featureId, geometryType, style);
};

/**
 * Set the default style of the feature
 *
 * @param {Number} featureId feature id
 * @param {module:extension/style.StyleRow} style style row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setStyleDefault = function(featureId, style) {
	return this.featureStyleExtension.setStyleDefault(this.tableName, featureId, style);
};

/**
 * Set the icons for the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.Icons} icons icons
 * @return {Promise}
 */
FeatureTableStyles.prototype.setIconsForFeatureRow = function(featureRow, icons) {
	return this.featureStyleExtension.setIconsForFeatureRow(featureRow, icons);
};

/**
 * Set the icons for the feature table and feature id
 *
 * @param {Number} featureId feature id
 * @param {module:extension/style.Icons} icons icons
 * @return {Promise}
 */
FeatureTableStyles.prototype.setIcons = function(featureId, icons) {
	return this.featureStyleExtension.setIcons(this.tableName, featureId, icons);
};

/**
 * Set the icon of the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.IconRow} icon icon row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setIconForFeatureRow = function(featureRow, icon) {
	return this.featureStyleExtension.setIconForFeatureRow(featureRow, icon);
};

/**
 * Set the icon of the feature row for the specified geometry type
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {String} geometryType geometry type
 * @param {module:extension/style.IconRow} icon icon row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setIconForFeatureRowAndGeometryType = function(featureRow, geometryType, icon) {
	return this.featureStyleExtension.setIconForFeatureRowAndGeometryType(featureRow, geometryType, icon);
};

/**
 * Set the default icon of the feature row
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {module:extension/style.IconRow} icon icon row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setIconDefaultForFeatureRow = function(featureRow, icon) {
	return this.featureStyleExtension.setIconDefaultForFeatureRow(featureRow, icon);
};

/**
 * Get the icon of the feature, searching in order: feature geometry type
 * icon, feature default icon, table geometry type icon, table default icon
 *
 * @param {Number} featureId feature id
 * @param {String} geometryType geometry type
 * @param {module:extension/style.IconRow} icon icon row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setIcon = function(featureId, geometryType, icon) {
	return this.featureStyleExtension.setIcon(this.tableName, featureId, geometryType, icon);
};

/**
 * Set the default icon of the feature
 *
 * @param {Number} featureId feature id
 * @param {module:extension/style.IconRow} icon icon row
 * @return {Promise}
 */
FeatureTableStyles.prototype.setIconDefault = function(featureId, icon) {
	return this.featureStyleExtension.setIconDefault(this.tableName, featureId, icon);
};

/**
 * Delete all feature styles including table styles, table icons, style, and
 * icons
 */
FeatureTableStyles.prototype.deleteAllFeatureStyles = function() {
	this.featureStyleExtension.deleteAllFeatureStyles(this.tableName);
	this.clearCachedTableFeatureStyles();
};

/**
 * Delete all styles including table styles and feature row styles
 */
FeatureTableStyles.prototype.deleteAllStyles = function() {
	this.featureStyleExtension.deleteAllStyles(this.tableName);
	this.clearCachedTableStyles();
};

/**
 * Delete all icons including table icons and feature row icons
 */
FeatureTableStyles.prototype.deleteAllIcons = function() {
	this.featureStyleExtension.deleteAllIcons(this.tableName);
	this.clearCachedTableIcons();
};

/**
 * Delete the feature table feature styles
 */
FeatureTableStyles.prototype.deleteTableFeatureStyles = function() {
	this.featureStyleExtension.deleteTableFeatureStyles(this.tableName);
	this.clearCachedTableFeatureStyles();
};

/**
 * Delete the feature table styles
 */
FeatureTableStyles.prototype.deleteTableStyles = function() {
	this.featureStyleExtension.deleteTableStyles(this.tableName);
	this.clearCachedTableStyles();
};

/**
 * Delete the feature table default style
 */
FeatureTableStyles.prototype.deleteTableStyleDefault = function() {
	this.featureStyleExtension.deleteTableStyleDefault(this.tableName);
	this.clearCachedTableStyles();
};

/**
 * Delete the feature table style for the geometry type
 *
 * @param {String} geometryType geometry type
 */
FeatureTableStyles.prototype.deleteTableStyle = function(geometryType) {
	this.featureStyleExtension.deleteTableStyle(this.tableName, geometryType);
	this.clearCachedTableStyles();
};

/**
 * Delete the feature table icons
 */
FeatureTableStyles.prototype.deleteTableIcons = function() {
	this.featureStyleExtension.deleteTableIcons(this.tableName);
	this.clearCachedTableIcons();
};

/**
 * Delete the feature table default icon
 */
FeatureTableStyles.prototype.deleteTableIconDefault = function() {
	this.featureStyleExtension.deleteTableIconDefault(this.tableName);
	this.clearCachedTableIcons();
};

/**
 * Delete the feature table icon for the geometry type
 *
 * @param {String} geometryType geometry type
 */
FeatureTableStyles.prototype.deleteTableIcon = function(geometryType) {
	this.featureStyleExtension.deleteTableIcon(this.tableName, geometryType);
	this.clearCachedTableIcons();
};

/**
 * Clear the cached table feature styles
 */
FeatureTableStyles.prototype.clearCachedTableFeatureStyles = function() {
	this.cachedTableFeatureStyles.setStyles(null);
	this.cachedTableFeatureStyles.setIcons(null);
};

/**
 * Clear the cached table styles
 */
FeatureTableStyles.prototype.clearCachedTableStyles = function() {
	this.cachedTableFeatureStyles.setStyles(null);
};

/**
 * Clear the cached table icons
 */
FeatureTableStyles.prototype.clearCachedTableIcons = function() {
	this.cachedTableFeatureStyles.setIcons(null);
};

/**
 * Delete all feature styles
 */
FeatureTableStyles.prototype.deleteFeatureStyles = function() {
	this.featureStyleExtension.deleteFeatureStyles(this.tableName);
};

/**
 * Delete all styles
 */
FeatureTableStyles.prototype.deleteStyles = function() {
	this.featureStyleExtension.deleteStyles(this.tableName);
};

/**
 * Delete feature row styles
 *
 * @param {module:features/user/featureRow} featureRow feature row
 */
FeatureTableStyles.prototype.deleteStylesForFeatureRow = function(featureRow) {
	this.featureStyleExtension.deleteStylesForFeatureRow(featureRow);
};

/**
 * Delete feature row styles
 *
 * @param {Number} featureId feature id
 */
FeatureTableStyles.prototype.deleteStylesForFeatureId = function(featureId) {
	this.featureStyleExtension.deleteStylesForFeatureId(this.tableName, featureId);
};

/**
 * Delete the feature row default style
 *
 * @param {module:features/user/featureRow} featureRow feature row
 */
FeatureTableStyles.prototype.deleteStyleDefaultForFeatureRow = function(featureRow) {
	this.featureStyleExtension.deleteStyleDefaultForFeatureRow(featureRow);
};

/**
 * Delete the feature row default style
 *
 * @param {Number} featureId feature id
 */
FeatureTableStyles.prototype.deleteStyleDefault = function(featureId) {
	this.featureStyleExtension.deleteStyleDefault(this.tableName, featureId);
};

/**
 * Delete the feature row style for the feature row geometry type
 *
 * @param {module:features/user/featureRow} featureRow feature row
 */
FeatureTableStyles.prototype.deleteStyleForFeatureRow = function(featureRow) {
	this.featureStyleExtension.deleteStyleForFeatureRow(featureRow);
};

/**
 * Delete the feature row style for the geometry type
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {String} geometryType geometry type
 */
FeatureTableStyles.prototype.deleteStyleForFeatureRowAndGeometryType = function(featureRow, geometryType) {
	this.featureStyleExtension.deleteStyleForFeatureRowAndGeometryType(featureRow, geometryType);
};

/**
 * Delete the feature row style for the geometry type
 *
 * @param {Number} featureId feature id
 * @param {String} geometryType geometry type
 */
FeatureTableStyles.prototype.deleteStyle = function(featureId, geometryType) {
	this.featureStyleExtension.deleteStyle(this.tableName, featureId, geometryType);
};

/**
 * Delete the style and associated mappings using StyleRow
 *
 * @param {module:extension/style.StyleRow} styleRow style row
 */
FeatureTableStyles.prototype.deleteStyleAndMappingsByStyleRow = function(styleRow) {
	this.featureStyleExtension.deleteStyleAndMappingsByStyleRow(this.tableName, styleRow);
};

/**
 * Delete the style and associated mappings using StyleRow's Id
 *
 * @param {Number} styleRowId style row id
 */
FeatureTableStyles.prototype.deleteStyleAndMappingsByStyleRowId = function(styleRowId) {
	this.featureStyleExtension.deleteStyleAndMappingsByStyleRowId(this.tableName, styleRowId);
};

/**
 * Delete all icons
 */
FeatureTableStyles.prototype.deleteIcons = function() {
	this.featureStyleExtension.deleteIcons(this.tableName);
};

/**
 * Delete feature row icons
 *
 * @param {module:features/user/featureRow} featureRow feature row
 */
FeatureTableStyles.prototype.deleteIconsForFeatureRow = function(featureRow) {
	this.featureStyleExtension.deleteIconsForFeatureRow(featureRow);
};

/**
 * Delete feature row icons
 *
 * @param {Number} featureId feature id
 */
FeatureTableStyles.prototype.deleteIconsForFeatureId = function(featureId) {
	this.featureStyleExtension.deleteIconsForFeatureId(this.tableName, featureId);
};

/**
 * Delete the feature row default icon
 *
 * @param {module:features/user/featureRow} featureRow feature row
 */
FeatureTableStyles.prototype.deleteIconDefaultForFeatureRow = function(featureRow) {
	this.featureStyleExtension.deleteIconDefaultForFeatureRow(featureRow);
};

/**
 * Delete the feature row default icon
 *
 * @param {Number} featureId feature id
 */
FeatureTableStyles.prototype.deleteIconDefault = function(featureId) {
	this.featureStyleExtension.deleteIconDefault(this.tableName, featureId);
};

/**
 * Delete the feature row icon for the feature row geometry type
 *
 * @param {module:features/user/featureRow} featureRow feature row
 */
FeatureTableStyles.prototype.deleteIconForFeatureRow = function(featureRow) {
	this.featureStyleExtension.deleteIconForFeatureRow(featureRow);
};

/**
 * Delete the feature row icon for the geometry type
 *
 * @param {module:features/user/featureRow} featureRow feature row
 * @param {String} geometryType geometry type
 */
FeatureTableStyles.prototype.deleteIconForFeatureRowAndGeometryType = function(featureRow, geometryType) {
	this.featureStyleExtension.deleteIconForFeatureRowAndGeometryType(featureRow, geometryType);
};

/**
 * Delete the feature row icon for the geometry type
 *
 * @param {Number} featureId feature id
 * @param {String} geometryType geometry type
 */
FeatureTableStyles.prototype.deleteIcon = function(featureId, geometryType) {
	this.featureStyleExtension.deleteIcon(this.tableName, featureId, geometryType);
};

/**
 * Delete the icon and associated mappings using IconRow
 *
 * @param {module:extension/style.IconRow} iconRow icon row
 */
FeatureTableStyles.prototype.deleteIconAndMappingsByIconRow = function(iconRow) {
	this.featureStyleExtension.deleteIconAndMappingsByIconRow(this.tableName, iconRow);
};

/**
 * Delete the icon and associated mappings using IconRow
 *
 * @param {Number} iconRowId icon row id
 */
FeatureTableStyles.prototype.deleteIconAndMappingsByIconRowId = function(iconRowId) {
	this.featureStyleExtension.deleteIconAndMappingsByIconRowId(this.tableName, iconRowId);
};

/**
 * Get all the unique style row ids the table maps to
 *
 * @return {module:extension/style.StyleRow} style row ids
 */
FeatureTableStyles.prototype.getAllTableStyleIds = function() {
	return this.featureStyleExtension.getAllTableStyleIds(this.tableName);
};

/**
 * Get all the unique icon row ids the table maps to
 *
 * @return {module:extension/style.IconRow} icon row ids
 */
FeatureTableStyles.prototype.getAllTableIconIds = function() {
	return this.featureStyleExtension.getAllTableIconIds(this.tableName);
};

/**
 * Get all the unique style row ids the features map to
 *
 * @return {module:extension/style.StyleRow} style row ids
 */
FeatureTableStyles.prototype.getAllStyleIds = function() {
	return this.featureStyleExtension.getAllStyleIds(this.tableName);
};

/**
 * Get all the unique icon row ids the features map to
 *
 * @return {module:extension/style.IconRow} icon row ids
 */
FeatureTableStyles.prototype.getAllIconIds = function() {
	return this.featureStyleExtension.getAllIconIds(this.tableName);
};

module.exports = FeatureTableStyles;
