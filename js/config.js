var CONFIG = {
	AVAILABLE_DBS: ["mysql", "sqlite", "web2py", "mssql", "postgresql", "oracle", "sqlalchemy", "vfp9", "cubrid"],
	DEFAULT_DB: "mysql",

	AVAILABLE_LOCALES: ["ar", "cs", "de", "el", "en", "eo", "es", "fr", "hu", "it", "ja", "pl", "pt_BR", "ro", "ru", "sv", "zh"],
	DEFAULT_LOCALE: "en",
	
	AVAILABLE_BACKENDS: ["php-mysql", "php-blank", "php-file", "php-sqlite", "php-mysql+file", "php-postgresql", "php-pdo", "perl-file", "php-cubrid"],
	DEFAULT_BACKEND: ["php-mysql"],

	RELATION_THICKNESS: 2,
	RELATION_THING: 5,
	RELATION_COVER: 20,
	RELATION_SPACING: 15,
	RELATION_COLORS: ["#000", "#800", "#080", "#008", "#088", "#808", "#088"],
	
	STATIC_PATH: "",
	XHR_PATH: "",

	RELATIONDROPDOWNBOX: {'selectedIconWidth':100,
                'selectedIconHeight':40,
                'selectedBoxPadding':1,
                'iconsWidth':100,
                'iconsHeight':40,
                'boxIconSpace':1,
                'vectoralIconNumber':1,
                'horizontalIconNumber':5}
}
