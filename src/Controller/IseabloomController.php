<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IseabloomController extends AbstractController
{
    /**
     * @Route("/iseabloom", name="app_iseabloom")
     */
    public function index(): Response
    {
        return $this->render('iseabloom/index.html.twig', [
            'controller_name' => 'IseabloomController',
        ]);
    }
}
