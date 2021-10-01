<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "pureconf_domdata" );


/** MySQL database username */
define( 'DB_USER', "pureconf_domdata" );


/** MySQL database password */
define( 'DB_PASSWORD', "R1bQaRbJfts0jcn6" );


/** MySQL hostname */
define( 'DB_HOST', "localhost" );


/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );


/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>@o}meVTe.0=}xC{:/8rKR )Gct6-hc*r:Iif$>x!W{e1?|%U3oULM39~d}CQQBe' );

define( 'SECURE_AUTH_KEY',  '9ma;,@dqI!z)cdRtQeP[Lk<DkU2Rn^}s-34tAe?9rKpzf,=a#Ptu>~COl|M3VdB0' );

define( 'LOGGED_IN_KEY',    'z|2E:yv*sfaV]/|7v<8]Oo>-OcE7C dm}(5SRx1YP^8fG)gZzp[fG+UY[hahfVF<' );

define( 'NONCE_KEY',        'Xfl_lv_$2eH?{#2siTT(OstK9*D2Q2T_(l!yhBU@U^eCV&>- O5Re!V2okVAL[Bq' );

define( 'AUTH_SALT',        'G/ar)(*bFJ<T8dhb,A1]V87!MQkb8q@Jn:%yW:0`?VI.utIPu}=qbdvZ- Ud(t=o' );

define( 'SECURE_AUTH_SALT', 'IxX`KwMncXPJ&roc/iNx$VYS1&Z2aBHwVBZP^,TScg/T/Z#,%kMyg|C7[dR]}3H8' );

define( 'LOGGED_IN_SALT',   '$kg8]2Y[EnI-7so=E4x*>GD{me/_NO}KJJwdUS,9_,Rha2{H&-qTq3RxR[3kn0G}' );

define( 'NONCE_SALT',       'Qd*UvIRRcH}HpqX+%X5gEhz_]/. 1}ri8hCmQPsOOnj{sI#P<:fA-e)Rx)~Rlh<^' );


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
