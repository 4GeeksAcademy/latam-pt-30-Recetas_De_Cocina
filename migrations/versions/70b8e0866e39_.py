"""empty message

Revision ID: 70b8e0866e39
Revises: 77379c1a50b1
Create Date: 2024-07-31 01:26:51.434383

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '70b8e0866e39'
down_revision = '77379c1a50b1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('informacion_nutritiva', schema=None) as batch_op:
        batch_op.alter_column('azucares',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=True)

    with op.batch_alter_table('plato', schema=None) as batch_op:
        batch_op.drop_column('favorito')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('plato', schema=None) as batch_op:
        batch_op.add_column(sa.Column('favorito', sa.BOOLEAN(), autoincrement=False, nullable=True))

    with op.batch_alter_table('informacion_nutritiva', schema=None) as batch_op:
        batch_op.alter_column('azucares',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               nullable=False)

    # ### end Alembic commands ###
