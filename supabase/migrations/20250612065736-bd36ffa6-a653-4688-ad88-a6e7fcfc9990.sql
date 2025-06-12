
-- Să verific mai întâi câte lecții are fiecare curs
SELECT c.name, c.slug, COUNT(s.id) as session_count
FROM courses c
LEFT JOIN sessions s ON c.id = s.course_id
GROUP BY c.id, c.name, c.slug
ORDER BY c.name;

-- Adaug lecțiile lipsă pentru fiecare curs până la 14
-- Pentru Scratch (are 12, adaug 2)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session 13',
    'session13',
    'Conținut în dezvoltare - Session 13',
    13
FROM courses c WHERE c.slug = 'scratch';

INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session 14',
    'session14',
    'Conținut în dezvoltare - Session 14',
    14
FROM courses c WHERE c.slug = 'scratch';

-- Pentru AppInventor (are 9, adaug 5)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(10, 14),
    'session' || generate_series(10, 14),
    'Conținut în dezvoltare - Session ' || generate_series(10, 14),
    generate_series(10, 14)
FROM courses c WHERE c.slug = 'appinventor';

-- Pentru Construct3 (are 1, adaug 13)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(2, 14),
    'session' || generate_series(2, 14),
    'Conținut în dezvoltare - Session ' || generate_series(2, 14),
    generate_series(2, 14)
FROM courses c WHERE c.slug = 'construct3';

-- Pentru GDevelop (are 1, adaug 13)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(2, 14),
    'session' || generate_series(2, 14),
    'Conținut în dezvoltare - Session ' || generate_series(2, 14),
    generate_series(2, 14)
FROM courses c WHERE c.slug = 'gdevelop';

-- Pentru Alice3 (are 4, adaug 10)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(5, 14),
    'session' || generate_series(5, 14),
    'Conținut în dezvoltare - Session ' || generate_series(5, 14),
    generate_series(5, 14)
FROM courses c WHERE c.slug = 'alice3';

-- Pentru MicrobitArcade (are 1, adaug 13)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(2, 14),
    'session' || generate_series(2, 14),
    'Conținut în dezvoltare - Session ' || generate_series(2, 14),
    generate_series(2, 14)
FROM courses c WHERE c.slug = 'microbitarcade';

-- Pentru MinecraftModding (are 3, adaug 11)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(4, 14),
    'session' || generate_series(4, 14),
    'Conținut în dezvoltare - Session ' || generate_series(4, 14),
    generate_series(4, 14)
FROM courses c WHERE c.slug = 'minecraft-modding';

-- Pentru RobloxLua (are 7, adaug 7)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(8, 14),
    'session' || generate_series(8, 14),
    'Conținut în dezvoltare - Session ' || generate_series(8, 14),
    generate_series(8, 14)
FROM courses c WHERE c.slug = 'robloxlua';

-- Pentru Python (are 1, adaug 13)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(2, 14),
    'session' || generate_series(2, 14),
    'Conținut în dezvoltare - Session ' || generate_series(2, 14),
    generate_series(2, 14)
FROM courses c WHERE c.slug = 'python';

-- Pentru FrontendDev (are 1, adaug 13)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(2, 14),
    'session' || generate_series(2, 14),
    'Conținut în dezvoltare - Session ' || generate_series(2, 14),
    generate_series(2, 14)
FROM courses c WHERE c.slug = 'frontenddev';

-- Pentru Greenfoot (are 3, adaug 11)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(4, 14),
    'session' || generate_series(4, 14),
    'Conținut în dezvoltare - Session ' || generate_series(4, 14),
    generate_series(4, 14)
FROM courses c WHERE c.slug = 'greenfoot';

-- Pentru Godot (are 6, adaug 8)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(7, 14),
    'session' || generate_series(7, 14),
    'Conținut în dezvoltare - Session ' || generate_series(7, 14),
    generate_series(7, 14)
FROM courses c WHERE c.slug = 'godot';

-- Pentru LEGO Spike Essentials (are 5, adaug 9)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(6, 14),
    'session' || generate_series(6, 14),
    'Conținut în dezvoltare - Session ' || generate_series(6, 14),
    generate_series(6, 14)
FROM courses c WHERE c.slug = 'lego-spike-essentials';

-- Pentru LEGO Spike Prime (adaug toate 14)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(1, 14),
    'session' || generate_series(1, 14),
    'Conținut în dezvoltare - Session ' || generate_series(1, 14),
    generate_series(1, 14)
FROM courses c WHERE c.slug = 'lego-spike-prime';

-- Pentru Microbit Explorers (adaug toate 14)
INSERT INTO sessions (course_id, name, slug, description, order_number)
SELECT 
    c.id,
    'Session ' || generate_series(1, 14),
    'session' || generate_series(1, 14),
    'Conținut în dezvoltare - Session ' || generate_series(1, 14),
    generate_series(1, 14)
FROM courses c WHERE c.slug = 'microbit-explorers';
