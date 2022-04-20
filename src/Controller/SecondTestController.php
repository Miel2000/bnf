<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecondTestController extends AbstractController
{
    /**
     * @Route("/second", name="app_second_test")
     */
    public function index(): Response
    {
        return $this->render('second_test/index.html.twig', [
            'controller_name' => 'SecondTestController',
        ]);
    }
}
