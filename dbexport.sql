--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Ubuntu 13.3-1.pgdg18.04+1)
-- Dumped by pg_dump version 14.1 (Ubuntu 14.1-1.pgdg18.04+1)

-- Started on 2021-12-28 03:31:54 IST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 205 (class 1259 OID 16475)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16473)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO postgres;

--
-- TOC entry 3020 (class 0 OID 0)
-- Dependencies: 204
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 203 (class 1259 OID 16464)
-- Name: department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.department (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text
);


ALTER TABLE public.department OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16462)
-- Name: department_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.department_id_seq OWNER TO postgres;

--
-- TOC entry 3021 (class 0 OID 0)
-- Dependencies: 202
-- Name: department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.department_id_seq OWNED BY public.department.id;


--
-- TOC entry 209 (class 1259 OID 16529)
-- Name: food_catalogue_relationship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.food_catalogue_relationship (
    id integer NOT NULL,
    description text,
    location_id integer,
    department_id integer,
    category_id integer,
    subcategory_id integer
);


ALTER TABLE public.food_catalogue_relationship OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16527)
-- Name: food_catalogue_relationship_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.food_catalogue_relationship_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.food_catalogue_relationship_id_seq OWNER TO postgres;

--
-- TOC entry 3022 (class 0 OID 0)
-- Dependencies: 208
-- Name: food_catalogue_relationship_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.food_catalogue_relationship_id_seq OWNED BY public.food_catalogue_relationship.id;


--
-- TOC entry 201 (class 1259 OID 16453)
-- Name: location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.location (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text
);


ALTER TABLE public.location OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16451)
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.location_id_seq OWNER TO postgres;

--
-- TOC entry 3023 (class 0 OID 0)
-- Dependencies: 200
-- Name: location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.location_id_seq OWNED BY public.location.id;


--
-- TOC entry 207 (class 1259 OID 16486)
-- Name: subcategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subcategory (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text
);


ALTER TABLE public.subcategory OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16484)
-- Name: subcategory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subcategory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subcategory_id_seq OWNER TO postgres;

--
-- TOC entry 3024 (class 0 OID 0)
-- Dependencies: 206
-- Name: subcategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subcategory_id_seq OWNED BY public.subcategory.id;


--
-- TOC entry 2858 (class 2604 OID 16478)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 2857 (class 2604 OID 16467)
-- Name: department id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department ALTER COLUMN id SET DEFAULT nextval('public.department_id_seq'::regclass);


--
-- TOC entry 2860 (class 2604 OID 16532)
-- Name: food_catalogue_relationship id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food_catalogue_relationship ALTER COLUMN id SET DEFAULT nextval('public.food_catalogue_relationship_id_seq'::regclass);


--
-- TOC entry 2856 (class 2604 OID 16456)
-- Name: location id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location ALTER COLUMN id SET DEFAULT nextval('public.location_id_seq'::regclass);


--
-- TOC entry 2859 (class 2604 OID 16489)
-- Name: subcategory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategory ALTER COLUMN id SET DEFAULT nextval('public.subcategory_id_seq'::regclass);


--
-- TOC entry 3010 (class 0 OID 16475)
-- Dependencies: 205
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name, description) FROM stdin;
1	Bakery Bread	Bakery Bread Desc
2	In Store Bakery	In Store Bakery Desc
3	Cheese	Cheese Desc
4	Creame Or Creamer	Creame Or Creamer desc
\.


--
-- TOC entry 3008 (class 0 OID 16464)
-- Dependencies: 203
-- Data for Name: department; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.department (id, name, description) FROM stdin;
2	Bakery	Bakery Description2
5	Frozen	Frozen Description
14	Cheese1	Chess1 desc
\.


--
-- TOC entry 3014 (class 0 OID 16529)
-- Dependencies: 209
-- Data for Name: food_catalogue_relationship; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.food_catalogue_relationship (id, description, location_id, department_id, category_id, subcategory_id) FROM stdin;
4	\N	1	2	\N	\N
5	\N	7	14	\N	\N
6	\N	1	5	\N	\N
7	\N	7	2	\N	\N
10	\N	1	2	1	\N
11	\N	1	5	2	\N
12	\N	1	2	2	\N
\.


--
-- TOC entry 3006 (class 0 OID 16453)
-- Dependencies: 201
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.location (id, name, description) FROM stdin;
1	Perimeter	Perimeter description
7	Center	Center new
\.


--
-- TOC entry 3012 (class 0 OID 16486)
-- Dependencies: 207
-- Data for Name: subcategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subcategory (id, name, description) FROM stdin;
1	Bagels	Bagels desc
2	Baking or Breading Products	Baking or Breading Products desc
3	English Muffins or Biscuits	English Muffins or Biscuits desc
4	Flatbreads	Flatbreads desc
6	Cakes	desc
7	Pies	desc
8	Seasonal	desc
9	Cheese Sauce	desc
10	Specialty Cheese	desc
11	Dairy Alternative Creamer	desc
12	Bread or Dough Products Frozen	desc
5	Breakfast Cake or Sweet Roll	Breakfast Cake or Sweet Roll desc
\.


--
-- TOC entry 3025 (class 0 OID 0)
-- Dependencies: 204
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 6, true);


--
-- TOC entry 3026 (class 0 OID 0)
-- Dependencies: 202
-- Name: department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.department_id_seq', 14, true);


--
-- TOC entry 3027 (class 0 OID 0)
-- Dependencies: 208
-- Name: food_catalogue_relationship_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.food_catalogue_relationship_id_seq', 13, true);


--
-- TOC entry 3028 (class 0 OID 0)
-- Dependencies: 200
-- Name: location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.location_id_seq', 14, true);


--
-- TOC entry 3029 (class 0 OID 0)
-- Dependencies: 206
-- Name: subcategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subcategory_id_seq', 12, true);


--
-- TOC entry 2866 (class 2606 OID 16483)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 2864 (class 2606 OID 16472)
-- Name: department department_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pkey PRIMARY KEY (id);


--
-- TOC entry 2870 (class 2606 OID 16537)
-- Name: food_catalogue_relationship food_catalogue_relationship_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food_catalogue_relationship
    ADD CONSTRAINT food_catalogue_relationship_pkey PRIMARY KEY (id);


--
-- TOC entry 2862 (class 2606 OID 16461)
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (id);


--
-- TOC entry 2868 (class 2606 OID 16494)
-- Name: subcategory subcategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategory
    ADD CONSTRAINT subcategory_pkey PRIMARY KEY (id);


--
-- TOC entry 2873 (class 2606 OID 16548)
-- Name: food_catalogue_relationship food_catalogue_relationship_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food_catalogue_relationship
    ADD CONSTRAINT food_catalogue_relationship_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE CASCADE;


--
-- TOC entry 2872 (class 2606 OID 16543)
-- Name: food_catalogue_relationship food_catalogue_relationship_department_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food_catalogue_relationship
    ADD CONSTRAINT food_catalogue_relationship_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.department(id) ON DELETE CASCADE;


--
-- TOC entry 2871 (class 2606 OID 16538)
-- Name: food_catalogue_relationship food_catalogue_relationship_location_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food_catalogue_relationship
    ADD CONSTRAINT food_catalogue_relationship_location_id_fkey FOREIGN KEY (location_id) REFERENCES public.location(id) ON DELETE CASCADE;


--
-- TOC entry 2874 (class 2606 OID 16553)
-- Name: food_catalogue_relationship food_catalogue_relationship_subcategory_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food_catalogue_relationship
    ADD CONSTRAINT food_catalogue_relationship_subcategory_id_fkey FOREIGN KEY (subcategory_id) REFERENCES public.subcategory(id) ON DELETE CASCADE;


-- Completed on 2021-12-28 03:31:55 IST

--
-- PostgreSQL database dump complete
--

