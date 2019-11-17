<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-compatable" content="IE-edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="Wordpress-project" content="">
    <meta name="Melvin vmegen" content="">

    <title><?php echo get_bloginfo( 'name' ); ?></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo( 'template_directory' );?>/style.css">
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js" integrity="sha256-BuxrUdr/4YoztQLxT6xmdO6hSQw2d6BtBUY1pteGds4=" crossorigin="anonymous"></script>
    <script defer type="text/javascript" src="<?php echo get_bloginfo( 'template_directory' );?>/functions.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <?php wp_head();?>
</head>
<body class="page-homepage">
		<div class="site-header">
			<div class="site-header-wrapper">
				<header class="main-header">
						<div class="main-header-top">
							<div class="main-header-left"></div>
							<div class="main-header-center">
							<h1><a href="<?php echo get_bloginfo( 'wpurl' );?>"><?php echo get_bloginfo( 'name' ); ?></a></h1><!-- site title -->
							<p class="lead blog-description"><?php echo get_bloginfo ('description') ?> </p>
							</div>
							<div class="main-header-right">
								<div class="header-user d-none d-sm-block">
									<div class="header-hire-me">
										<span style="visibility: visible;">
											<a class="cta-button" id="sticky-hire-me" href="https://www.linkedin.com/in/melvin-van-megen" title="hire-me">► Hire me!</a>
										</span>
									</div>
									  <div class="menu-dropdowns header-login">
									    <button class="button-dropdowns">Langues</button>
									    <div class="dropdown-content">
									      <a href="#" class="dropdown-item">Français</a>
									      <a href="#" class="dropdown-item">Anglais</a>
									      <a href="#" class="dropdown-item">Hollandais</a>
									    </div>
									  </div>
								</div>
							</div>
						</div>
						<nav class="nav-bar">
							<div class="nav-bar-container">
								<ul class="nav-menu d-none d-sm-flex">
									<li class="nav-menu-item-first"><a href="#Digital-marketer">Marketeur digital</a></li>
									<li class="nav-menu-item"><a href="#Web-Developer">Développeur Web</a></li>
									<li class="nav-menu-item"><a href="#Translator">Traducteur</a></li>
									<li class="nav-menu-item"><a href="#My-projects">Mes projets</a></li>
									<li class="nav-menu-item"><a href="#Recommandations">Recommandations</a></li>
								</ul>
							</div>
						</nav>
				</header>
			</div>
			<div id="sticky-header">
				<div class="sticky-header-container">
					<div class="sticky-header-left">
						<h1><a href="<?php echo get_bloginfo( 'wpurl' );?>"><?php echo get_bloginfo( 'name' ); ?></a></h1><!-- site title -->
					</div>
					<div class="sticky-header-right d-none d-sm-flex">
						<ul class="nav-menu">
							<li class="nav-menu-item-first"><a href="#Digital-marketer">Marketeur digital</a></li>
							<li class="nav-menu-item"><a href="#Web-Developer">Développeur Web</a></li>
							<li class="nav-menu-item"><a href="#Translator">Traducteur</a></li>
							<li class="nav-menu-item"><a href="#My-projects">Mes projets</a></li>
						</ul>
						<div class="header-user">
							<div class="header-hire-me">
								<span style="visibility: visible;">
									<a class="cta-button" id="sticky-hire-me" href="https://www.linkedin.com/in/melvin-van-megen" title="hire-me">► Engagez-moi !</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>