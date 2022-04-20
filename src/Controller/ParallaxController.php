<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ParallaxController extends AbstractController
{
    /**
     * @Route("/parallax", name="app_parallax")
     */
    public function index(): Response
    {
        return $this->render('parallax/index.html.twig', [
            'controller_name' => 'ParallaxController',
        ]);
    }
}
